<template>
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
         this.$store.state.genreFilterItem = itemName;
      },
   },
};
</script>

<style scoped>
.contentGridContainer {
   grid-gap: 2vw;
   padding: 101px 0 8vw;
}
.bannerImg {
   background-image: url("../pictures/Banner.jpg");
   background-repeat: no-repeat;
   background-size: cover;
   height: 10vw;
   grid-column-start: 1;
   grid-column-end: 3;
}
</style>