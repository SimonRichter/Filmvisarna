<template>
   <div class="contentGridContainer">
      <!-- Put all content here in grid container -->
      <CarouselList class="carousel" />
      <h2>In cinemas</h2>

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
.carousel {
   grid-area: 1/1/2/4;
   /* height: 80vh; */
   background-color: white;
   /* margin: 2vh 0 2vh; */
   color: darkgreen;
}
h2 {
   color: wheat;
   border-bottom: 1px #dc0428 solid;
}
.showingList {
   grid-area: 2/1/3/4;
   height: auto;
   margin: 2vh 0 2vh;
   display: flex;
}
</style>