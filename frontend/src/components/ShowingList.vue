<!--
1. Import showingItem
2. components: {showingItem}
3. computed: { movies(){ get movies from store }} 
4. v-for="movies" to show the movies in horizontal list
-->

<template>
  <ShowingItem
    v-for="movie of movies"
    :key="movie.id"
    :movieId="movie.id"
    :image="movie.poster"
  />
</template>

<script>
import ShowingItem from "./ShowingItem.vue";

export default {
  components: {
    ShowingItem,
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