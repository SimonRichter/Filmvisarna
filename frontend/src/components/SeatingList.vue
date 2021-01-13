<template>
  <SeatingItem class="seatingItem" />
</template>

<script>
import SeatingItem from "./SeatingItem.vue";

export default {
  components: {
    SeatingItem,
  },
};
</script>

<style scoped>
.seatingItem {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>