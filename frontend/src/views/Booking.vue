<template>
  <div class="contentGridContainer">
  
      <h2>Hello World</h2>
      <h2>{{ movies.title }}</h2>
      <span>{{ movies.time }}</span
      ><span>{{ movies.date }}</span>
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
      return this.$store.state.movies.filter((obj) => obj.title == this.title)[0];
    },
  },
};
</script>

<style scoped>
  h2 {
    grid-area: 1/1/2/3;
    height: 200px;
  }
</style>