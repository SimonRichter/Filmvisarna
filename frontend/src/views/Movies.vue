<template>
   <div class="contentGridContainer">
      <!-- <img src="../pictures/Banner.jpg" alt="Banner picture with movie theme" /> -->
      <div class="bannerImg"></div>
      <MovieList />
   </div>
</template>

<script>
import MovieList from "../components/movieList.vue";
export default {
   components: {
      MovieList,
   },
};
</script>

<style scoped>
.contentGridContainer{
   grid-gap: 3vw;
}
.bannerImg {
   background-image: url("../pictures/Banner.jpg") ;
   background-repeat: no-repeat;
   background-size: cover;
   height: 10vw;
   grid-column-start: 1;
   grid-column-end: 3;
   margin-bottom: 10px;
}

</style>