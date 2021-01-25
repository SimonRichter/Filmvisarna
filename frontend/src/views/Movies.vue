<template>
   <img src="../pictures/Banner.jpg" alt="Banner picture with movie theme" />
   <GenreFilter
      :options="[
         'Show All',
         'Action',
         'Horror',
         'Sci-Fi',
         'Crime',
         'Drama',
         'Animation',
         'Adventure',
         'Comedy',
         'Family',
         'Fantasy',
         'Music',
         'Thriller',
         'Biography',
      ]"
      :default="'Filter by genre'"
      class="select"
      @input="addFilterItem($event)"
   />
   <div class="contentGridContainer">
      <div class="bannerImg"></div>
      <MovieList />
   </div>
</template>

<script>
import MovieList from "../components/MovieList.vue";
import GenreFilter from "../components/GenreFilter.vue";
export default {
   components: {
      MovieList,
      GenreFilter,
   },
   props: ["itemName"],
   methods: {
      addFilterItem(itemName) {
         console.log(itemName);
         this.$store.state.filterItem = itemName;
      },
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