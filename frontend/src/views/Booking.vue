<template>
  <div class="contentGridContainer">
    <div class="cinema-screen">
      <hr />
    </div>
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
      return this.$route.params.id;
    },
    showing() {
      return this.$store.state.showings.filter((obj) => obj.id == this.id)[0];
    },
  },
};
</script>

<style scoped>
.contentGridContainer {
  grid-gap: 2vw;
  padding-top: 150px;
}

h3 {
  font-size: 35px;
  letter-spacing: 2px;
}
h2 {
  font-size: 25px;
}
span {
  font-size: 18px;
  font-family: "Bebas Neue", cursive;
}
</style>
<style>

.bookingMovieInfo {
  grid-column: 1;
  grid-row: 1;
  padding-bottom: 2vw;
}

.cinema-screen{
   grid-column: 1;
  grid-row: 2;
}
hr {
  width: 400px;
  margin-left: 10px;
  padding-left: 20px;
  border: 0;
  height: 4px;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.75),
    rgba(255, 255, 255, 0)
  );
}

.grid-seating-map {
  grid-column: 1;
  grid-row: 3;
}

.chooseType-grid {
  grid-column: 2;
  grid-row: 3;
}

.chooseType-grid > .max-8 {
  grid-column: 1;
  grid-row: 1;
}

.chooseType-grid > .if-disabled-btn {
  grid-column: 2;
  grid-row: 1;
  text-align: right;
}

.chooseType-grid > .grid-container-list {
  grid-column: 1/3;
  grid-row: 2;
}

.ticketsInfo-grid {
  grid-column: 2;
  grid-row: 4;
}

.ticketsInfo-grid > h2 {
  grid-column: 1;
  grid-row: 1;
}

.ticketsInfo-grid .ticket-types {
  grid-column: 1;
  grid-row: 2;
}

.ticketsInfo-grid .ticket-sum {
  grid-column: 2;
  grid-row: 1;
  text-align: right;
}

.ticketsInfo-grid .bookingConfirmationBtn {
  grid-column: 2;
  grid-row: 2;
  text-align: right;
  padding-top: 31px;
}
</style>