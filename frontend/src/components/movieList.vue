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
      
         let item = this.$store.state.genreFilterItem;
         if (
            item === null ||
            item === "Show All" ||
            item === "Filter by genre"
         ) {
 
            return this.movies;
         } else {
      
            return this.movies.filter((movie) => movie.genre.includes(item));
         }
      },
   },
};
</script>

<style scoped>
</style>