<template>
  <div class="contentGridContainer">
    <SeatingList class="seatingList" />

    <!-- Put all content here in grid container -->
  </div>
</template>

<script>
import SeatingList from "../components/SeatingList.vue";
export default {
  components: {
    SeatingList,
  },
};
</script>

<style scoped>
.seatingList {
  width: 600px;
  height: 300px;
  background-color: white;
}
</style>