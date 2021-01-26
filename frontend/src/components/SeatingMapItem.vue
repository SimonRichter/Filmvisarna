<template>
  <div>
    <div
      @click="clicked = !clicked"
      class="chair available"
      v-bind:class="[clicked == true ? ' reserved' : '']"
      v-if="availableSeat == null || availableSeat == false"
    ></div>
    <div class="chair taken" v-else></div>
  </div>
</template>

<script>
export default {
  props: ["showing", "seatIndex"],
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
</style>