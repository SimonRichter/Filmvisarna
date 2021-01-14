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
    updateTotal(event){
      this.$emit('update-total', updatedPrice, typeTitle);
    }
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