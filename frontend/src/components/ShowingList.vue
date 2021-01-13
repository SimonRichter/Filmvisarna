<!--
1. Import showingItem
2. components: {showingItem}
3. computed: { movies(){ get movies from store }} 
4. v-for="movies" to show the movies in horizontal list
-->

<template>
  <div class="gridContainer">
    <ShowingItem
      class="showingItem"
      v-for="movie of movies"
      :key="movie.id"
      :movieId="movie.id"
      :moviePoster="movie.poster"
      :movieTitle="movie.title"
    />
  </div>
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
.gridContainer {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  grid-template-rows: 1;
}
.showingItem {
  grid-row: 1;
}
</style>