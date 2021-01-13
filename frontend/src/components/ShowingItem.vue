<!--
1. Get movie index
2. Get title of movie ??? 
3. Get poster of movie
4. Have a routerlink for the poster to get to chosen-movie-view
-->
<template>
  <div>
    <h3>{{ movieTitle }}</h3>
    <router-link :to="'/chosen-movie/' + movieId">
      <img class="moviePoster" :src="moviePoster" />
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["movieId", "moviePoster", "movieTitle"],
};
</script>

<style scoped>
</style>