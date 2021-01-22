<template>
  <div class="contentGridContainer">
    <div class="movieInfo">
      <h1>
        {{ showing.theatre }}, <span> {{ showing.salon }}</span>
      </h1>
      <br />
      <h3>{{ showing.title }}</h3>
      <span>{{ showing.date }}</span>
      <span> - {{ showing.time }}</span>
      <!-- <hr> -->
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
      console.log("id", this.$route.params.id);
      return this.$route.params.id;
    },
    showing() {
      // console.log(
      //   this.$store.state.showings.filter((obj) => obj.id == this.id)[0]
      // );
      this.$store.state.showings.filter((obj) => {
        console.log("obj.id", obj.id);
        console.log("this.id", this.id);
      });
      return this.$store.state.showings.filter((obj) => obj.id == this.id)[0];
    },
  },
};
</script>

<style scoped>
/* * {
  color: white;
} */
.movieInfo {
  grid-area: 1/1/2/3;
  margin-top: 10vh;
}
/* h2 {
  color: white;
} */
span {
  /* color: lightblue;
  font-size: 14px;
  font-family: "Bebas Neue", cursive; */
  border-bottom: 1px solid #6e1020;
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