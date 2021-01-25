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
img {
   margin-top: 85px;
   margin-bottom: 10px;
}
.contentGridContainer {
   width: 93vw;
   padding-top: 1vh;
}
</style>