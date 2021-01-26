<template>
  <div class="grid-container-list">
    <SeatingItem
      v-for="count in counter"
      :key="count"
      :count="count - 1"
      v-bind:seatIndexes="seatIndexes"
      @update-total="updateTotal"
    />
  </div>
</template>

<script>
import SeatingItem from "./SeatingItem.vue";

export default {
  emits: ["update-total"],
  props: ["counter", "seatIndexes"],
  components: {
    SeatingItem,
  },
  computed: {},
  methods: {
    updateTotal(type, price, seatIndex) {
      this.$emit("update-total", type, price, seatIndex);
    },
  },
};
</script>

<style scoped>
</style>