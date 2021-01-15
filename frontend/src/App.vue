<template>
  <NavBar />

  <router-view />

  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;500;700&display=swap"
    rel="stylesheet"
  />
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
   components: {
      NavBar,
   },
   created() {
      this.$store.dispatch("fetchMovies");
      // this.$store.dispatch("fetchMembers");
      this.$store.dispatch("fetchBookings");
      this.$store.dispatch("fetchShowings");
   },
};
</script>

<style scoped>
</style>
