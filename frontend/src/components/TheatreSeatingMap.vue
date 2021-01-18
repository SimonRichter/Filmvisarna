<template>
  <div class="grid-container-map">
    <h3 class="totalSeats">Total seats left: {{ totalSeats }}</h3>
    <button class="remove" @click="increment">
      <i class="gg-math-minus"></i>
    </button>
    <div class="counter">
      <h3>{{ counter }}</h3>
    </div>
    <button class="add" @click="decrement">
      <i class="gg-math-plus"></i>
    </button>
  </div>
  <SeatingList :counter="counter" @update-total="updateTickets" />
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
      <h3>Total sum: {{ totalSum }} kr</h3>
    </div>
    <!-- Needs to to have correc route after confirmation page is done-->
    <div class="if-disabled-btn" v-if="!(counter === goToNextStep)">
      <h3>Choose ticket types</h3>
    </div>
    <router-link :to="'/confirmation-page/' + showing.id">
      <button
        :disabled="!(counter === goToNextStep)"
        class="next-btn"
        @click="
               sendDataToNextView
        "
        :to="'/chosen-movie/' + showing.title + '/booking/' + showing.id"
      >
        Next
      </button>
    </router-link>
  </div>
</template>

<script>
import SeatingList from "./SeatingList.vue";

export default {
  props: ["showing"],
  data() {
    return {
      counter: 1,
      totalSum: 0,
      totalSeats: this.showing.seats - 1,
      ticketTypes: [],
      typeAdult: 0,
      typeChild: 0,
      typeSenior: 0,
      numberOfTickets: 1,
      objToSend: [],
      goToNextStep: 0,
    };
  },
  components: {
    SeatingList,
  },
  computed: {
    sendDataToNextView() {
      this.objToSend = {
        tickets: [
          { 
            title: "Adult",
            value: this.typeAdult
          },
          {
            title: "Child (0-12)",
            value: this.typeChild
            },
            {
            title: "Senior (65+)",
            value: this.typeSenior
            }
        ],
        totalSum: this.totalSum,
        showing: this.showing
      };
      this.$store.commit("setBookingInfo", this.objToSend);
    },
  },
  methods: {
    increment() {
      if (this.totalSeats <= 0) {
        this.totalSeats = 0;
      } else if (this.counter > 7) {
        console.log("You have maxed out");
      } else {
        this.counter++;
        this.totalSeats--;
      }
    },
    decrement() {
      if (this.totalSeats >= this.showing.seats - 1) {
        this.totalSeats = this.showing.seats - 1;
        this.counter = 1;
      } else {
        this.counter--;
        this.totalSeats++;

        if (this.counter >= 1 && !!this.ticketTypes[this.counter]) {
          this.ticketTypes.pop();
        }
        this.updateSum();
      }
    },
    updateTickets(type, price, ticketNumber) {
      this.ticketTypes[ticketNumber - 1] = { ticketType: type, price: price };
      this.updateSum();
    },
    updateSum() {
      let localTotalSum = 0;
      this.typeAdult = 0;
      this.typeChild = 0;
      this.typeSenior = 0;
      this.goToNextStep = 0;

      for (let i = 0; i < this.counter; i++) {
        if (!this.ticketTypes[i]) {
          console.log("You havent filled in all ticket types");
        } else {
          localTotalSum += +this.ticketTypes[i].price;
          switch (this.ticketTypes[i].ticketType) {
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
 
  },
};
</script>

<style scoped>
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
.totalSeats {
  grid-column: 1;
  grid-row: 1;
  text-align: left;
  margin-left: 10px;
  padding-top: 2px;
  margin-bottom: 5px;
}
.counter {
  grid-column: 3;
  grid-row: 1;
  text-align: center;
  padding-top: 2px;
}
.add {
  grid-column: 2;
  grid-row: 1;
}
.remove {
  grid-column: 4;
  grid-row: 1;
}
button {
  text-align: center;
  border: #6e1020 1px solid;
  background-color: #131313;
  border-radius: 5px;
  color: rgb(238, 220, 192);
}
button:active,
button:disabled {
  background-color: #222222;
}
button:disabled{
  cursor: default;
}
.grid-container-list {
  grid-column: 1;
  padding-top: 15px;
  padding-bottom: 5px;
}
.ticket-grid {
  grid-column: 1;
  display: grid;
  grid-template-columns: minmax(100px, 1fr) 100px;
  grid-template-rows: 20px minmax(30px, 1fr) 10px;
  gap: 5px;
  border-radius: 5px;
  background-color: #131313;
  margin-top: 10px;
  margin-bottom: 10px;
}
.next-btn {
  grid-column: 2;
  grid-row: 4;
  height: 30px;
  width: 50px;
  padding-left: 5px;
  margin-left: 50px;
  cursor: pointer;
}
.ticket-types {
  grid-column: 1;
  grid-row: 2;
  text-align: left;
  margin-top: 10px;
}
.ticket-sum {
  grid-column: 1;
  grid-row: 4;
  text-align: left;
  padding-top: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
}
.if-disabled-btn, .if-disabled-btn h3 {
  grid-column: 2;
  grid-row: 2;
  text-align: right;
  font-size: 12px;
  color: #6e1020;
  margin-bottom: 2px;
  margin-top: 5px;
}
.gg-math-plus,
.gg-math-minus {
  margin-left: 10px;
  margin-top: -2px;
  position: relative;
  transform: scale(var(--ggs, 1));
  width: 16px;
  height: 2px;
}
.gg-math-plus,
.gg-math-plus::after,
.gg-math-minus,
.gg-math-minus::after {
  display: block;
  box-sizing: border-box;
  background: currentColor;
  border-radius: 10px;
}
.gg-math-minus::after {
  content: "";
  position: absolute;
  width: 2px;
  height: 16px;
  top: -7px;
  left: 7px;
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