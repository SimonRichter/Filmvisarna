<template>
  <div class="flexBox_showingList">
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

.showingItem {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


}
</style>