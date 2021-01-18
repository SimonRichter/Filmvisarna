<template>
   <img  src="../pictures/Banner.jpg" alt="Banner picture with movie theme" />
   <div class="contentGridContainer">
      <MovieList />
   </div>
</template>

<script>
import MovieList from "../components/MovieList.vue";
export default {
   components: {
      MovieList,
   },
};
</script>

<style scoped>
img {
   margin-top:58px;
   margin-bottom: 30px;
}
.contentGridContainer {
   width: 93vw;
}
</style>