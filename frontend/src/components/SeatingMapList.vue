<template>
  <div class="grid-seating-map">
    <SeatingMapItem
      v-for="(seat, i) in showing.totalSeats"
      :key="seat"
      :seatIndex="i"
      v-bind:showing="showing"
      @click="changeTicket(i)"
    />
  </div>
</template>

<script>
import SeatingMapItem from "./SeatingMapItem.vue";

export default {
  emits: ["changeTicket"],
  props: ["showing"],
  data() {
    return {
      clicked: false,
    };
  },
  components: {
    SeatingMapItem,
  },
  methods: {
    changeTicket(seatIndex) {
      this.clicked = !this.clicked;
      if (this.clicked == true) {
        console.log("I have clicked in map list at seat index", seatIndex);
        this.$emit("changeTicket", seatIndex);
      } else {
        console.log("I dont want this seat anymore", seatIndex);
        this.$emit("changeTicket", seatIndex);
      }
    },
    // changeTicket(seatIndex) {
    //   console.log("I am in change ticket - seat list");
    //   console.log("seatIndex", seatIndex);
    //   this.$emit("changeTicket", seatIndex);
    // },
  },
};
</script>

<style scoped>
</style>