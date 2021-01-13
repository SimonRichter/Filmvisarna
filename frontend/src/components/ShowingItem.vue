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
h3{
  color: white;
  padding: 14px 16px;
}
.moviePoster{
  width: 13vw;
}
</style>