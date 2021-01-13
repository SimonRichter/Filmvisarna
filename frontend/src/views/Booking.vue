<template>
  <div class="contentGridContainer">
    <div class="movieInfo">
      <h2>Filmvisarna,<span> Stora Salongen</span></h2><br>
      <h3>{{ movie.title }}</h3>
      <span>Wed 11/04</span><span> - 20:45</span>
      <!-- Put all content here in grid container -->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    title() {
      // get movie title from url parameter
      return this.$route.params.title;
    },
    movie() {
      return this.$store.state.movies.filter(
        (obj) => obj.title == this.title
      )[0];
    },
  },
};
</script>

<style scoped>
* {
  color: white;
}
.movieInfo {
  grid-area: 1/1/2/3;
}
h2 {
  color: white;
}
span {
  color: lightblue;
  font-size: 14px;
}
h3 {
  color: lightblue;
}
</style>