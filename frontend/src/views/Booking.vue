<template>
  <div class="contentGridContainer">
    <h2>{{ movie.title }}</h2>
    <span>{{ movie.time }}</span
    ><span>{{ movie.date }}</span>
    <!-- Put all content here in grid container -->
  </div>
</template>

<script>
export default {
  computed: {
    id() {
      // get id from url parameter
      return this.$route.params.title;
    },
    movie() {
      return this.$store.state.movies.filter((obj) => obj.id == this.id)[0];
    },
  },
};
</script>

<style>
</style>