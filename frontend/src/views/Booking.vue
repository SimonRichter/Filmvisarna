<template>
   <div class="contentGridContainer">
      <div class="movieInfo">
         <br />
         <h3>{{ showing.title }}</h3>
         <h2>
            {{ showing.theatre }}, <span> {{ showing.salon }}, </span>
            <span>{{ showing.date }}</span>
            <span> - {{ showing.time }}</span>
         </h2>
         <div class="border"></div>
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
         return this.$store.state.showings.filter(
            (obj) => obj.id == this.id
         )[0];
      },
   },
};
</script>

<style scoped>
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
.movieInfo {
   grid-area: 1/1/2/3;
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