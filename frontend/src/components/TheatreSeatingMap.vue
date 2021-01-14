<template>
  <!-- <div v-for="showing in showings" :key="showing.id"></div>
  <div v-if="showing.id == id">
    {{ showing.seats }}
  </div> -->
  <div class="grid-container">
    <div class="totalSeats">Total seats left: {{ this.totalSeats }}</div>
    <button class="add" @click="decrement"><i class="gg-math-minus"></i></button>
    <div class="counter">{{ this.counter }}</div>
    <button class="remove" @click="increment"><i class="gg-math-plus"></i></button>
  </div>
  <!-- <SeatingList /> -->
</template>

<script>
import SeatingList from "./SeatingList.vue";

export default {
  data() {
    return {
      counter: 1,
      totalSeats: 199,
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
    increment() {
      if (this.totalSeats <= 0) {
        this.totalSeats = 0;
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
  },
};
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: minmax(50px, 1fr) 50px 100px 50px;
  gap: 0;
  height: 30px;
  background-color:rgb(248, 244, 239);
}
.totalSeats {
  text-align: center;
  padding-top: 3px;
}
.counter {
  text-align: center;
  padding-top: 3px;
}
button {
  text-align: center;
  padding-left:15px;
  border: rgb(221, 219, 217) 2px solid;
  background-color: rgb(233, 220, 206);
  border-radius: 5px;
}
.gg-math-plus, .gg-math-minus {
  margin-top: -2px;
  position: relative;
  transform: scale(var(--ggs, 1));
  width: 16px;
  height: 2px;
}
.gg-math-plus,
.gg-math-plus::after, .gg-math-minus,
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