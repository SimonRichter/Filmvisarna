<template>
  <div class="contentGridContainer">
    <SeatingItem v-for="count in counter" :key="count" :counter="count" class="seatingItem" />
  </div>
</template>

<script>
import SeatingItem from "./SeatingItem.vue";

export default {
  props: ["counter"],
  components: {
    SeatingItem,
  },
};
</script>

<style scoped>
.seatingItem {
  grid-area: 1;
}
</style>