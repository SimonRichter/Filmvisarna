<template>
  <div class="contentGridContainer">
    <div class="movieInfo">
      <h2>
        {{ showing.theatre }}, <span> {{ showing.salon }}</span>
      </h2>
      <br />
      <h3>{{ showing.title }}</h3>
      <span>{{ showing.date }}</span
      ><span> - {{ showing.time }}</span>
      <TheatreSeatingMap :showing="showing" />

      <!-- Put all content here in grid container -->
      <!-- Put all content here in grid container -->
    </div>
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
  grid-column: 1 / 1 / auto / 2;
  height: auto;
  margin: 2vh 0 2vh;
  display: flex;
}
</style>