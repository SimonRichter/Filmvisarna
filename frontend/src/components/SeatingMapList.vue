<template>
  <div class="grid-seating-map">
    <div class="seats">
      <SeatingMapItem
        v-for="(seat, i) in showing.totalSeats"
        :key="seat"
        :seatIndex="i"
        :counter="counter"
        v-bind:showing="showing"
        @click="changeTicket(i)"
      />
    </div>
  </div>
</template>

<script>
import SeatingMapItem from "./SeatingMapItem.vue";

export default {
  emits: ["changeTicket"],
  props: ["showing", "counter"],
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
      this.$emit("changeTicket", seatIndex);
    },
  },
};
</script>

<style scoped>
.grid-seating-map {
  display: block;
  min-width: 400px;
  max-width: 400px;
}
.seats {
  padding-left: 60px;
}
</style>