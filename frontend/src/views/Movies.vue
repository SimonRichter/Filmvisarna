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
   <div class="bannerImg"></div>
   <div class="contentGridContainer">
      
      <MovieList />
   </div>
    <Footer />
</template>

<script>
import MovieList from "../components/movieList.vue";
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
    
         this.$store.state.genreFilterItem = itemName;
      },
   },
};
</script>

<style scoped>
.contentGridContainer {
   grid-gap: 2vw;
   padding: 0px 0 8vw;
}
.bannerImg {
   margin-top: 80px;
   margin-bottom: 2vw;
   background-image: url("../pictures/movie-cinema-poster2.jpg");
   background-repeat: no-repeat;
   background-size: cover;
   height: 20vw;
   grid-column-start: 1;
   grid-column-end: 3;
}
</style>