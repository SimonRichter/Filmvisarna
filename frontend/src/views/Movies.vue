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
    <Footer />
</template>

<script>
import MovieList from "../components/MovieList.vue";
import GenreFilter from "../components/GenreFilter.vue";
import Footer from "../components/Footer.vue"
export default {
   components: {
      MovieList,
      GenreFilter,
      Footer
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
   background-image: url("../pictures/movie-cinema-poster.jpg");
   background-repeat: no-repeat;
   background-size: cover;
   height: 15vw;
   grid-column-start: 1;
   grid-column-end: 3;
}
</style>