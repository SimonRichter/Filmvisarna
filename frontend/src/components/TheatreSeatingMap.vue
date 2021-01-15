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
  <SeatingList :counter="counter" @update-total="updateTotal" />
  <div class="totalSum">
    Ticket types:
    <div>{{ this.ticketTypes }}</div>
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
      }
    },
    updateTotal(type, price, ticketNumber, numberOfTickets) {
      this.ticketTypes[ticketNumber - 1] = { ticketType: type, price: price };
      this.checkTickets(numberOfTickets);
    },
    checkTickets(numberOfTickets) {
      let totalSum = 0;
      for (let i = 0; i < numberOfTickets; i++) {
        console.log(this.ticketTypes[i]);
        if (!this.ticketTypes[i]) {
          console.log("You havent filled in a ticket type on all tickets");
        } else {
          totalSum += +this.ticketTypes[i].price;
          console.log("you can go to the next step");
        }
      }
      this.totalSum = totalSum;
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