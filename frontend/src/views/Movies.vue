<template>
  <div class="contentGridContainer">
    <TheatreSeatingMap class="seatingMap" />

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
</style>