<template>
  <!-- <div v-for="showing in showings" :key="showing.id"></div>
  <div v-if="showing.id == id">
    {{ showing.seats }}
  </div> -->

  <div class="grid-container-map">
    <div class="totalSeats">Total seats left: {{ this.totalSeats }}</div>
    <button class="add" @click="decrement">
      <i class="gg-math-minus"></i>
    </button>
    <div class="counter">{{ this.counter }}</div>
    <button class="remove" @click="increment">
      <i class="gg-math-plus"></i>
    </button>
  </div>
  <SeatingList :counter="counter" @update-total="updateTickets" />
  <div class="totalSum">
    Ticket types:
    <div v-if="this.typeAdult > 0">{{ this.typeAdult }} Adult</div>
    <div v-if="this.typeChild > 0">{{ this.typeChild }} Child(0-12)</div>
    <div v-if="this.typeSenior > 0">{{ this.typeSenior }} Senior(65+)</div>
    Total sum: {{ this.totalSum }} kr
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
      sizeOfArray: 8,
      ticketTypes: [],
      typeAdult: 0,
      typeChild: 0,
      typeSenior: 0,
      numberOfTickets: 1,
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
  },
  methods: {
    setSizeOfArray() {
      this.ticketTypes.length = this.sizeOfArray;
    },
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
      } else {
        this.counter--;
        this.totalSeats++;
        this.updateSum(this.counter);
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
      for (let i = 0; i < this.counter; i++) {
        console.log(this.ticketTypes[i]);
        if (!this.ticketTypes[i]) {
          console.log("You havent filled in a ticket type on all tickets");
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
.grid-container-list {
  grid-column: 1;
  padding-top: 15px;
  padding-bottom: 5px;
}
.totalSum {
  grid-column: 2;
  max-height: 100px;
  background-color: crimson;
  margin-left: 100px;
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
</style>