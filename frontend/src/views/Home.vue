<template>
  <div class="contentGridContainer" id="animation">
    <CarouselList class="carousel" />
    <h2 class="inCinemas">Now in vue <span class="x"> X </span> cinemas</h2>
    <ShowingList class="showingList" />
    <div class="centerMe">
      <router-link to="/movies">
        <button>See all movies</button>
      </router-link>
   </div>
   </div>
    <Footer />
</template>

<script>
import ShowingList from "../components/ShowingList.vue";
import CarouselList from "../components/CarouselList.vue";
import Footer from "../components/Footer.vue"


export default {
   components: {
      ShowingList,
      CarouselList,Footer
   },
 
};
</script>

<style scoped>
button {
  border: #6e1020 1px solid;
  background-color: #131313;
  border-radius: 5px;
  color: rgb(238, 220, 192);
  height: 36px;
  width: 150px;
  cursor: pointer;
  margin-bottom: 2vh;
  font-size: 18px;
}
button:active,
button:disabled {
  background-color: #222222;
}
.carousel {
  grid-area: 1/1/2/3;
  background-color: #131313;
}
.inCinemas {
  grid-area: 2/1/3/3;

  border-bottom: #6e1020 1px solid;
}
.showingList {
  grid-area: 3/1/4/3;
  height: auto;
  margin: 1vw 0 1vw;
  display: flex;
  font-weight: 800;
}
.x {
  font-family: "Bebas Neue", cursive;
  font-size: 30px;
  color: #6e1020;
}
.centerMe {
  padding-top: 2vw;
  grid-column-start: 1;
  grid-column-end: 3;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#animation {
  animation: fadein 2s;
  -moz-animation: fadein 2s; /* Firefox */
  -webkit-animation: fadein 2s; /* Safari and Chrome */
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fadein {
  /* Firefox */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes fadein {
  /* Safari and Chrome */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
