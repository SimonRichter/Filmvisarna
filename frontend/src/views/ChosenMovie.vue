<template>
  <div class="contentGridContainer">
    <TheatreSeatingMap />

    <!-- Put all content here in grid container -->
  </div>
</template>

<script>
import TheatreSeatingMap from "../components/TheatreSeatingMap.vue";
export default {
  components: {
    TheatreSeatingMap,
  },
};
</script>

<style scoped>
.grid-container-map {
  grid-column: 1 / 1 / auto / 2;
  height: auto;
  margin: 2vh 0 2vh;
  display: flex;
}
</style>