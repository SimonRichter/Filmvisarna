<template>
  <SeatingMapItem
    v-for="(seat, i) in showing.totalSeats"
    :key="seat"
    :seat="i"
    v-bind:showing="showing"
  />
</template>

<script>
import SeatingMapItem from "./SeatingMapItem.vue";
export default {
  props: ["showing"],
  components: {
    SeatingMapItem,
  },
  computed: {},
};
</script>

<style scoped>
</style>