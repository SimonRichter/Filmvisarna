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
  emits: ["update-total"],
  props: ["counter"],
  data() {
    return {
      ticketTypes: [],
    };
  },
  components: {
    SeatingItem,
  },
  computed: {},
  methods: {
    updateTotal(type, price, ticketNumber) {
      this.$emit("update-total", type, price, ticketNumber, this.counter);
    },
  },
};
</script>

<style scoped>
</style>