<template>
   <div class="contentGridContainer">
      <!-- Put all content here in grid container -->
      <CarouselList class="carousel" />
      <h2 class="inCinemas">Now in vue <span class="x"> X </span> cinemas</h2>

      <ShowingList class="showingList" />
   </div>
</template>

<script>
import ShowingList from "../components/ShowingList.vue";
import CarouselList from "../components/CarouselList.vue";

export default {
   components: {
      ShowingList,
      CarouselList,
   },
   // data() {
   //   return {};
   // },
   // computed: {
   //   movies() {
   //     return this.$store.state.movies;
   //   },
   // },
};
</script>

<style scoped>
.contentGridContainer {
   padding-top: 8vh;
}
.carousel {
   grid-area: 1/1/2/3;
   /* height: 80vh; */
   background-color: white;
   margin: 2vw 0 7vw;
   color: darkgreen;
}
.inCinemas {
   grid-area: 2/1/3/3;
   color: white;
   border-bottom: 1px #dc0428 solid;
}
.showingList {
   grid-area: 3/1/4/3;
   height: auto;
   margin: 1vw 0 5vw;
   display: flex;
   font-weight: 800;
}
.x{
   font-family:'Bebas Neue', cursive;
   font-size: 30px;
   color: red;
}
</style>