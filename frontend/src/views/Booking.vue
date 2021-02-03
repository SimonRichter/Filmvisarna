<template>
  <div class="contentGridContainer">
    <TheatreSeatingMap v-bind:showing="showing" />
    <div class="bookingMovieInfo">
      <h3>{{ showing.title }}</h3>
      <h2>
        {{ showing.theatre }}, <span> {{ showing.salon }}, </span>
        <span>{{ showing.date }}</span>
        <span> - {{ showing.time }}</span>
      </h2>
      <div class="border"></div>
    </div>
  </div>
  <Footer />
</template>

<script>
import TheatreSeatingMap from "../components/TheatreSeatingMap.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    TheatreSeatingMap,
    Footer,
  },
  computed: {
    id() {
      // get showing id from url parameter
      return this.$route.params.id;
    },
    showing() {
      return this.$store.state.showings.filter((obj) => obj.id == this.id)[0];
    },
  },
};
</script>

<style scoped>

.contentGridContainer{
   grid-gap:2vw;
   padding-top:150px;
}

h3 {
  font-size: 30px;
}
h2 {
  font-size: 20px;
}
span {
  font-size: 14px;
  font-family: "Bebas Neue", cursive;
}

.border {
  background-color: #6e1020;
  height: 1px;
  width: 100%;
}

/* h3 {
  color: lightblue;
} */
/* .grid-container-map {
  grid-area: 2/1/3/2;
} */
/* hr{
  color: #6e1020;
} */
</style>
<style>
.bookingMovieInfo{
   grid-column: 1;
   grid-row:1;
   text-align: center;
}

.grid-seating-map {
   grid-column: 1;
   grid-row:3;
}

.chooseType-grid{
   grid-column: 2;
   grid-row: 3;
}

.chooseType-grid > .max-8{
   grid-column: 1;
   grid-row:1
}

.chooseType-grid > .if-disabled-btn{
   grid-column: 2;
   grid-row:1;
   text-align:right;
}

.chooseType-grid > .grid-container-list{
   grid-column: 1/3;
   grid-row:2;
}


.ticketsInfo-grid{
   grid-column: 2;
   grid-row: 4;
}

.ticketsInfo-grid > h2{
   grid-column: 1;
   grid-row: 1;
}

.ticketsInfo-grid .ticket-types {
   grid-column: 1;
   grid-row: 2;
}

.ticketsInfo-grid .ticket-sum{
   grid-column: 2;
   grid-row: 1;
   text-align: right;
}

.ticketsInfo-grid .bookingConfirmationBtn{
   grid-column: 2;
   grid-row: 2;
   text-align: right;
   padding-top:31px;
}
</style>