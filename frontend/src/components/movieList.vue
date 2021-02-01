<template>
   <MovieItem
      v-for="movie of filteredMovies"
      :key="movie.title"
      :movieTitle="movie.title"
      :movieGenres="movie.genre"
      :imageUrl="movie.poster"
      :movieLength="movie.runtime"
      :ageClassification="movie.rated"
      :moviePlot="movie.plot"
   />
</template>

<script>
import MovieItem from "./MovieItem.vue";

export default {
   components: {
      MovieItem,
   },
   props: ["itemName"],
   computed: {
      movies() {
         return this.$store.state.movies;
      },
      filteredMovies() {
         console.log("Running filteredMovies()");
         let item = this.$store.state.genreFilterItem;
         if (
            item === null ||
            item === "Show All" ||
            item === "Filter by genre"
         ) {
            console.log("Showing all");
            return this.movies;
         } else {
            console.log("Trying to filter by: ", item);
            return this.movies.filter((movie) => movie.genre.includes(item));
         }
      },
   },
};
</script>

<style scoped>
</style>