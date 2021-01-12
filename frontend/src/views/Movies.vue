<template>
  <img src="../pictures/Banner.jpg" alt="Banner picture with movie theme" />
  <div class="contentGridContainer">
    <MovieList />
  </div>
</template>

<script>
import MovieList from "../components/MovieList.vue";
export default {
  components: {
    MovieList,
  },
};
</script>

<style>
</style>