<template>
  <MovieItem
      v-for="movie of movies"
      :key="movie.title"
      :movieTitle="movie.title"
      :movieGenres="movie.genre"
      :imageUrl="movie.poster"
      :movieLength="movie.runtime"
      :ageClassification="movie.rated"
      :moviePlot="movie.plot"
   />
  <div class="contentGridContainer">
   <ChosenMovie/>
  </div>


</template>

<script>
import MovieItem from '../components/movieItem.vue'
export default {
 components: {
      MovieItem
   },
     computed: {
    id() {
      return this.$route.params.id
    },
    movies(){
      return this.$store.state.movies.filter(movies => movies.id == this.id)[0]
    }
  },
}
</script>

<style>

</style>