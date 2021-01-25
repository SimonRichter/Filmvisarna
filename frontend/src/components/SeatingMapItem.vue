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
  // emits: ["changeTicket"],
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
    // content() {
    //   return this.clicked == true ? "Reserved" : "Available";
    // },
    // changeTicket() {
    //   this.content = this.clicked == false ? "Available" : "Reserved";
    //   if (this.clicked == true) {
    //     console.log('I have clicked in map item');
    //     this.$emit("changeTicket", this.seatIndex);
    //   } else {
    //     this.$emit("changeTicket", null);
    //   }
    // },
  },
  methods: {
    // setContent() {
    //   this.clicked = !this.clicked;
    //   this.content = this.clicked == true ? "Reserved" : "Available";
    // },
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