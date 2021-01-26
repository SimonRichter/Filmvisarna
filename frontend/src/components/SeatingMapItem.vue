<template>
  <div>
    <div
      @click="checkTotalSeats()"
      class="chair available"
      v-bind:class="[clicked == true ? ' reserved' : counter >= 8 ? ' max' : '']"
      v-if="availableSeat == null || availableSeat == false"
    ></div>
    <div class="chair taken" v-else></div>
  </div>
</template>

<script>
export default {
  props: ["showing", "seatIndex", "counter"],
  data() {
    return {
      clicked: false,
    };
  },
  computed: {
    availableSeat() {
      return this.showing.seats[this.seatIndex];
    },
  },
  methods:{
    checkTotalSeats(){
      if(this.counter < 8){
        this.clicked = !this.clicked;
      }
    }
  }
};
</script>

<style scoped>
.chair {
  width: 25px;
  height: 25px;
  border: rgb(94, 91, 87) 1px solid;
  border-radius: 5px;
  color: black;
  cursor: pointer;
  float: left;
  margin-left: 5px;
  margin-top: 5px;
}
.available {
  background-color: #131313;
}
.available:hover {
  background-color: rgb(238, 220, 192);
}
.taken {
  background-color: #6e1020;
  cursor: default;
}
.reserved {
  background-color: rgb(238, 220, 192);
}
.max {
  background-color: rgb(212, 154, 61);
  cursor: default;
}
.max:hover {
  background-color: rgb(212, 154, 61);
}
</style>