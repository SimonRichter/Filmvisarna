<template>
  <!-- <div v-for="showing in showings" :key="showing.id"></div>
  <div v-if="showing.id == id">
    {{ showing.seats }}
  </div> -->

  <div class="grid-container-map">
    <div class="totalSeats">Total seats left: {{ this.totalSeats }}</div>
    <button class="remove" @click="decrement">
      <i class="gg-math-minus"></i>
    </button>
    <div class="counter">{{ this.counter }}</div>
    <button class="add" @click="increment">
      <i class="gg-math-plus"></i>
    </button>
  </div>
  <SeatingList :counter="counter" @update-total="updateTickets" />
  <div class="ticket-grid">
    Ticket types:
    <div class="ticket-types">
      <div v-if="this.typeAdult > 0">{{ this.typeAdult }} Adult</div>
      <div v-if="this.typeChild > 0">{{ this.typeChild }} Child(0-12)</div>
      <div v-if="this.typeSenior > 0">{{ this.typeSenior }} Senior(65+)</div>
    </div>
    <div class="ticket-sum">Total sum: {{ this.totalSum }} kr</div>
    <!-- Needs to to have correc route after showings list is done-->
    <router-link :to="'/chosen-movie/Blade'">
      <button class="next-btn" @click="sendDataToNextView">Next</button>
    </router-link>
  </div>
</template>

<script>
import SeatingList from "./SeatingList.vue";

export default {
  data() {
    return {
      counter: 1,
      totalSeats: 199,
      totalSum: 0,
      ticketTypes: [],
      typeAdult: 0,
      typeChild: 0,
      typeSenior: 0,
      numberOfTickets: 1,
      objToSend: [],
    };
  },
  components: {
    SeatingList,
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    seatsInTheatre() {
      return this.$store.state.showings;
    },
    sendDataToNextView() {
      this.objToSend = {
        tickets: [
          {
            Adult: this.typeAdult,
            "Child(0-12)": this.typeChild,
            "Senior(65+": this.typeSenior,
          },
        ],
        totalSum: this.totalSum,
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
      if (this.totalSeats >= 199) {
        this.totalSeats = 199;
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
      let goToNextStep = 0;

      for (let i = 0; i < this.counter; i++) {
        if (!this.ticketTypes[i]) {
          console.log("You havent filled in all ticket types");
        } else {
          localTotalSum += +this.ticketTypes[i].price;
          switch (this.ticketTypes[i].ticketType) {
            case "Adult":
              this.typeAdult++;
              break;
            case "Child(0-12)":
              this.typeChild++;
              break;
            case "Senior(65+)":
              this.typeSenior++;
              break;
          }
          goToNextStep++;
          console.log("you can go to the next step");
        }
      }
      this.totalSum = localTotalSum;
    },
  },
};
</script>

<style>
.grid-container-map {
  display: grid;
  grid-template-columns: minmax(50px, 1fr) 50px 100px 50px;
  grid-auto-rows: auto;
  gap: 0;
  background-color: rgb(105, 120, 151);
  border-radius: 5px;
  border: black 2px solid;
}
.totalSeats {
  text-align: center;
  padding-top: 5px;
  margin-bottom: 5px;
}
.counter {
  text-align: center;
  padding-top: 5px;
}
button {
  text-align: center;
  padding-left: 15px;
  border: rgb(63, 72, 90) 2px solid;
  background-color: rgb(85, 97, 122);
  border-radius: 5px;
}
button:active {
  background-color: rgb(120, 130, 153);
}
.grid-container-list {
  grid-column: 1;
  padding-top: 15px;
  padding-bottom: 5px;
}
.ticket-grid {
  grid-column: 1;
  display: grid;
  grid-template-columns: minmax(100px, 1fr) 50px;
  grid-template-rows: 20px minmax(60px, 1fr) 30px;
  gap: 5px;
  max-height: 120px;
  background-color: crimson;
  margin-left: 100px;
  padding: 10px;
  margin-bottom: 10px;
}
.next-btn {
  grid-column: 2;
  grid-row: 3;
  height: 30px;
  width: 50px;
  padding-left: 5px;
}
.ticket-types {
  grid-column: 1;
  grid-row: 2;
  text-align: left;
}
.ticket-sum {
  grid-column: 1;
  grid-row: 3;
  text-align: left;
  padding-top: 10px;
}
.gg-math-plus,
.gg-math-minus {
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
.gg-math-plus::after {
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