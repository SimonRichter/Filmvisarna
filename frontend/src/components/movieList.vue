<template>
  <MovieItem 
    v-for="movie of movies" 
    :key="movie.title"
    :movieTitle="movie.title"
    :movieGenres="movie.genre"
    :imageUrl="movie.poster"
    :movieLength="movie.runtime"
    :ageClassification="movie.rated"
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