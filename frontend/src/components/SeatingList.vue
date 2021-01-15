<template>
  <div class="grid-container-list">
    <SeatingItem
      v-for="count in counter"
      :key="count"
      :count="count"
      @update-total="updateTotal"
    />
  </div>
</template>

<script>
import SeatingItem from "./SeatingItem.vue";

export default {
  props: ["counter"],
  components: {
    SeatingItem,
  },
  methods: {
    updateTotal(type, price, ticketNumber) {
      console.log("This counter in list", this.counter);
      this.$emit("update-total", type, price, ticketNumber, this.counter);
    },
  },
};
</script>

<style scoped>
.grid-container-list {
  display: grid;
  grid-template-columns: 1;
}
.grid-container-item {
  grid-column: 1;
  margin-top: 3px;
}
</style>