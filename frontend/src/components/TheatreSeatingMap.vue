<template>
  <div class="ticket-grid">
    <h2>Ticket types</h2>
    <div class="ticket-types">
      <h3>
        <div v-if="typeAdult > 0">{{ typeAdult }} Adult</div>
        <div v-if="typeChild > 0">{{ typeChild }} Child (0-12)</div>
        <div v-if="typeSenior > 0">{{ typeSenior }} Senior (65+)</div>
      </h3>
    </div>
    <div class="ticket-sum">
      <h3>Total:   {{ totalSum }} kr</h3>
    </div>
    <div class="if-disabled-btn" v-if="!(counter == goToNextStep)">
    <h3>Choose ticket types</h3>
  </div>
  </div>
  <router-link :to="'/confirmation-page/' + showing.id">
    <button
      :disabled="!(counter === goToNextStep) || counter == 0"
      class="next-btn"
      @click="
        sendDataToNextView, setSeats();
        removeSeatsBackend();
      "
      :to="'/chosen-movie/' + showing.title + '/booking/' + showing.id"
    >
      Confirm your tickets
    </button>
  </router-link>
  
  <SeatingList
    :counter="counter"
    v-bind:seatIndexes="seatIndexes"
    v-bind:ticketTypes="ticketTypes"
    @update-total="updateTickets"
  />
  <SeatingMapList v-bind:showing="showing" :counter="counter" @changeTicket="changeTicket" />
  <h3 class="max-8" v-if="counter >= 8">You can choose max 8 tickets</h3>
</template>

<script>
import SeatingList from "./SeatingList.vue";
import SeatingMapList from "./SeatingMapList.vue";

export default {
  props: ["showing"],
  watch: {
    showing: {
      deep: true,
      handler(newVal) {
        if (this.seatIndexes.length <= 0) {
          return;
        }
        for (let i = 0; i < this.seatIndexes.length; i++) {
          const index = this.seatIndexes[i];
          if (newVal.seats[index] == true) {
            this.seatIndexes = [];
            this.ticketTypes = [];
            this.counter = 0;
            this.totalSum = 0;
          }
        }
      },
    },
  },
  data() {
    return {
      counter: 0,
      totalSum: 0,
      ticketTypes: [],
      typeAdult: 0,
      typeChild: 0,
      typeSenior: 0,
      objToSend: [],
      goToNextStep: 0,
      seatIndexes: [],
    };
  },
  components: {
    SeatingList,
    SeatingMapList,
  },
  computed: {
    sendDataToNextView() {
      this.objToSend = {
        tickets: [
          {
            title: "Adult",
            value: this.typeAdult,
          },
          {
            title: "Child (0-12)",
            value: this.typeChild,
          },
          {
            title: "Senior (65+)",
            value: this.typeSenior,
          },
        ],
        totalSum: this.totalSum,
        showing: this.showing,
      };
      this.$store.commit("setBookingInfo", this.objToSend);
    },
  },
  methods: {
    setSeats() {
      for (let i = 0; i < this.seatIndexes.length; i++) {
        for (let j = 0; j < this.showing.totalSeats; j++) {
          if (this.seatIndexes[i] == j) {
            this.showing.seats[j] = true;
          } else if (this.showing.seats[j] == false) {
            this.showing.seats[j] = false;
          }
        }
      }
    },
    changeTicket(seatIndex) {
      console.log("SEAT INDEX", seatIndex);
      if (this.seatIndexes.length <= 0 || this.seatIndexes.indexOf(seatIndex) < 0) {
        if (this.counter < 8 && (this.showing.seats[seatIndex] == undefined || this.showing.seats[seatIndex] == false)) {
          this.seatIndexes.push(seatIndex);
          this.counter++;
        }
      } else {
        const i = this.seatIndexes.indexOf(seatIndex);
        this.seatIndexes.splice(i, 1);

        let index;
        if (this.ticketTypes.length <= 0) {
          index = -1;
        } else {
          this.ticketTypes.filter((ticket) => {
            if (ticket.seatIndex == seatIndex) {
              index = this.ticketTypes.indexOf(ticket);
            }
          });
        }
        if (index >= 0) {
          this.ticketTypes.splice(index, 1);
        }
        this.counter--;
        this.updateSum();
      }
    },
    updateTickets(type, price, seatIndex) {
      let index;
      if (this.ticketTypes.length <= 0) {
        index = -1;
      } else {
        this.ticketTypes.filter((ticket) => {
          if (ticket.seatIndex == seatIndex) {
            index = this.ticketTypes.indexOf(ticket);
          } else {
            index = -1;
          }
        });
      }
      if (index < 0) {
        this.ticketTypes.push({
          seatIndex: seatIndex,
          ticketType: type,
          price: price,
        });
      } else {
        this.ticketTypes[index] = {
          seatIndex: seatIndex,
          ticketType: type,
          price: price,
        };
      }
      console.log("this ticket type after update tickets", this.ticketTypes);
      this.updateSum();
    },
    updateSum() {
      console.log("UPDATE SUM CALLED");
      let localTotalSum = 0;
      this.typeAdult = 0;
      this.typeChild = 0;
      this.typeSenior = 0;
      this.goToNextStep = 0;

      if (this.counter == 0) {
        this.totalSum = 0;
        return;
      }

      for (let i = 0; i < this.counter; i++) {
        const ticket = this.ticketTypes[i];
        if (ticket == undefined) {
          console.log("You havent filled in all ticket types");
        } else {
          localTotalSum += +ticket.price;
          switch (ticket.ticketType) {
            case "Adult":
              this.typeAdult++;
              break;
            case "Child (0-12)":
              this.typeChild++;
              break;
            case "Senior (65+)":
              this.typeSenior++;
              break;
          }
          this.goToNextStep++;
          console.log("you can go to the next step");
        }
      }
      this.totalSum = localTotalSum;
    },
    removeSeatsBackend() {
      this.$store.dispatch("updateSeatsInBackend", this.showing);
    },
  },
};
</script>

<style scoped>
h3{
  margin-top: -18px;
}
.grid-seating-map {
  grid-column: 2;
  grid-row: 1 / 4;
  padding-top: 15px;
  padding-bottom: 5px;
  margin-top: 12vh;
  margin-left: 10vh;
}
.grid-container-map {
  margin-top: 20px;
  display: grid;
  grid-template-columns: minmax(50px, 1fr) 50px 100px 50px;
  grid-template-rows: 30px;
  gap: 0;
  background-color: #131313;
  border-radius: 5px;
  border: #6e1020 1px solid;
}
button {
  text-align: center;
  border: #6e1020 1px solid;
  background-color: #131313;
  border-radius: 5px;
  color: rgb(238, 220, 192);
}
button:enabled {
  background-color: #6e1020;
}
.grid-container-list {
  grid-column: 1;
  min-height: 80px;
  padding-bottom: 5px;
  margin-bottom: 100px;
  margin-top: 50px;
}
.ticket-grid {
  grid-column: 1;
  display: grid;
  grid-template-columns: minmax(50px, 1fr) 100px;
  grid-template-rows: 50px 100px minmax(10px, 1fr) 30px;
  gap: 5px;
  border-radius: 5px;
  background-color: #131313;
  margin-top: 10px;
  margin-bottom: 10px;
}
.next-btn {
  grid-column: 1;
  grid-row: 4;
  height: 30px;
  width: 150px;
  padding-left: 5px;
  margin-top: 10px;

  cursor: pointer;
}
a {
  max-height: 0;
}
.ticket-types {
  grid-column: 1;
  grid-row: 2;
  text-align: left;
  margin-top: 10px;
}
.ticket-sum {
  grid-column: 1;
  grid-row: 3;
  text-align: left;
  padding-top: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
}
.if-disabled-btn,
.if-disabled-btn h3 {
  grid-column: 1;
  grid-row: 4;
  text-align: left;
  font-size: 16px;
  color: #6e1020;
  margin-bottom: 2px;
  margin-top: 10px;
}
.max-8{
  grid-column: 2;
  grid-row: 4;
  text-align: left;
  color: #6e1020;
  margin-bottom: 2px;
  margin-top: 5px;
  margin-left: 200px;
}
* {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
</style>