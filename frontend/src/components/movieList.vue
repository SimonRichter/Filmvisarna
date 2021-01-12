<template>
  <MovieItem 
    v-for="movie of movies" 
    :key="movie.title"
    :movieTitle="movie.title"
    :movieGenres="movie.genres"
    :imageUrl="movie.imageUrl"
    :movieLength="movie.length"
    :ageClassification="movie.ageClassification"
  />
</template>

<script>
import MovieItem from "./MovieItem.vue";
export default {
  components: {
    MovieItem,
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    },
  },
};
</script>

<style scoped>
</style>