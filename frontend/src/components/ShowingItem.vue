<!--
1. Get movie index
2. Get title of movie ??? 
3. Get poster of movie
4. Have a routerlink for the poster to get to chosen-movie-view
-->
<template>
  <div>
    <router-link :to="'/chosen-movie/' + movieId">
      <img :src="moviePoster" />
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["movieId", "moviePoster"],
};
</script>

<style scoped>
div {
  max-width: 200px;
}
</style>