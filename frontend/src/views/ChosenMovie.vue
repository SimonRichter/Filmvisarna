<template>
<div class="contentGridContainer">
    <div class="movieInfo">
      <h2>
        Filmvisarna,<span> {{ showing.theatre }}</span>
      </h2>
      <br />
      <h3>{{ movie.title }}</h3>
      <!-- Put all content here in grid container -->
    </div>
  </div>

</template>

<script>
import MovieItem from '../components/movieItem.vue'
export default {
     computed: {
    id() {
      // get showing id from url parameter
      return this.$route.params.id;
    },
    title() {
      // get movie title from url parameter
      return this.$route.params.title;
    },
    movie() {
      return this.$store.state.movies.filter(
        (obj) => obj.title == this.title
      )[0];
    },
    showing() {
      return this.$store.state.showings.filter((obj) => obj.id == this.id)[0];
    },
  },
};
</script>




<style>

</style>