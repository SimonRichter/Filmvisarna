<template>
  <div class="grid-seating-map">
    <hr />
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
hr {
  width: 400px;
  margin-bottom: 12vh;
  margin-left: 10px;
  padding-left: 20px;
  border: 0;
  height: 4px;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.75),
    rgba(255, 255, 255, 0)
  );
}
</style>