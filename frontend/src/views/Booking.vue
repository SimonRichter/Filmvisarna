<template>
  <div class="contentGridContainer">
    <div class="movieInfo">
      <br />
      <h2>
        {{ showing.theatre }}, <span> {{ showing.salon }}</span>
      </h2>
      <br />
      <h3>{{ showing.title }}</h3>
      <span>{{ showing.date }}</span>
      <span> - {{ showing.time }}</span>
      <hr>
      <!-- Put all content here in grid container -->
    </div>
   
    <TheatreSeatingMap v-bind:showing="showing" />
  </div>
</template>

<script>
import TheatreSeatingMap from "../components/TheatreSeatingMap.vue";
export default {
  components: {
    TheatreSeatingMap,
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
* {
  color: white;
}
.movieInfo {
  grid-area: 1/1/2/3;
}
h2 {
  color: white;
}
span {
  color: lightblue;
  font-size: 14px;
  font-family: "Bebas Neue", cursive;
}
h3 {
  color: lightblue;
}
.grid-container-map {
  grid-area: 2/1/3/2;
}
</style>