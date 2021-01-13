<template>
  <div class="contentGridContainer">
    <!-- Put all content here in grid container -->
    <div class="carousel">Carousel</div>

    <ShowingList class="showingList" />
  </div>
</template>

<script>
import ShowingList from "../components/ShowingList.vue";

export default {
  components: {
    ShowingList,
  },
  // data() {
  //   return {};
  // },
  // computed: {
  //   movies() {
  //     return this.$store.state.movies;
  //   },
  // },
};
</script>

<style scoped>
.carousel {
  grid-area: 1/1/2/3;
  height: 80vh;
  background-color: white;
  margin: 2vh 0 2vh;
  color: darkgreen;
}
.showingList {
  grid-column: 1 / 3;
  grid-row: 2;
  /* grid-area: 2/1/3/4; */
  height: 30vh;
  background-color: white;
  margin: 2vh 0 2vh;
  color: darkgreen;
}
</style>