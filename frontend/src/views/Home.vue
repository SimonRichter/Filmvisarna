<template>
  <div class="contentGridContainer" id="test">
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
  /* background-color: white; */
  /* TEST 1 */
  background-color: #131313;
  /* TEST 2 */
  /* TEST 3 */
  margin: 2vw 0 7vw;
  color: darkgreen;
}
.inCinemas {
  grid-area: 2/1/3/3;
  /* color: white;
  border-bottom: 1px #dc0428 solid; */
  /* TEST 1 */
  /* color: #c09b55; */
  border-bottom: #6e1020 1px solid;
  /* TEST 2 */
  /* TEST 3 */
}
.showingList {
  grid-area: 3/1/4/3;
  height: auto;
  margin: 1vw 0 5vw;
  display: flex;
  font-weight: 800;
}
.x {
  font-family: "Bebas Neue", cursive;
  font-size: 30px;
  color: #6e1020 
}
#test  {
    animation: fadein 2s;
    -moz-animation: fadein 2s; /* Firefox */
    -webkit-animation: fadein 2s; /* Safari and Chrome */
}
@keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-moz-keyframes fadein { /* Firefox */
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-webkit-keyframes fadein { /* Safari and Chrome */
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
</style>
