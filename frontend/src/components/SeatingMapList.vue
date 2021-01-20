<template>
  <div class="grid-seating-map">
    <SeatingMapItem
      v-for="(seat, i) in showing.totalSeats"
      :key="seat"
      :seatIndex="i"
      v-bind:showing="showing"
      @addTicket="addTicket"
    />
  </div>
</template>

<script>
import SeatingMapItem from "./SeatingMapItem.vue";

export default {
  emits: ["addTicket"],
  props: ["showing"],
  components: {
    SeatingMapItem,
  },
  computed: {
    addTicket(seatIndex) {
      this.$emit("addTicket", seatIndex);
    },
  },
};
</script>

<style scoped>
</style>