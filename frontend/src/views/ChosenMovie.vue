<template>
   <div class="setWidth">
      <div class="movieInfo">
         <!-- <img :src="movie.posterLandscape" /> -->
         <iframe
            width="1220"
            height="400"
            :src="'https://www.youtube.com/embed/' + movie.trailer"
         >
         </iframe>
      </div>
      <h2>{{ movie.genre }}</h2>
      <h2><span></span> {{ movie.length }}</h2>
      <h2><span></span> | {{ movie.runtime }}</h2>
      <h2><span></span> | {{ movie.rated }}</h2>
      <h3>Language: {{ movie.language }}</h3>
      <h3><span></span> Director: {{ movie.director }}</h3>
      <h3><span></span> Actors: {{ movie.actors }}</h3>

      <p class="plotText">{{ movie.plot.substring(0, 1000).trimRight() }}...</p>
   </div>

   <AvailableShowing />
   <Calendar v-on:datePicked="what" />

</template>

<script>
import AvailableShowing from "../components/AvailableShowing.vue"
import Calendar from"../components/Calendar.vue"

export default {
  // props:{dp:"dayPicked",mp:"monthPicked"},

   components:{AvailableShowing,
      Calendar

   },
   methods:{
      what(dayPicked,monthPicked){    
         console.log("testt",dayPicked,monthPicked)    
         return {dayPicked,monthPicked}
      }

   },
   computed: {
    

      title() {
         // get showing id from url parameter
         return this.$route.params.title.replaceAll("-", " ");
      },

      movie() {
         return this.$store.state.movies.filter(
            (movie) => movie.title == this.title
         )[0];
      },
      whichTheater() {
         return this.$store.state.showings.filter(
            (obj) => obj.title == this.title
         )[0];
      },
      
      allMovies() {
         return this.$store.state.movies;
      },
   },
};
</script>

<style scoped>
iframe {
   border: none;
   margin-top: 86px;
   margin-bottom: 20px;
}

h1 {
   margin-top: 5px;
   margin-bottom: 10px;
}
h2 {
   display: inline;
   font-size: 24px;
   /* color: rgba(245, 222, 179, 0.432); */
}
h4 {
   margin-top: 15px;
   margin-bottom: 7px;
   font-family: "Bebas Neue", cursive !important;
   font-size: 20px;
   font-weight: lighter;
}
h3 {
   color: rgb(206, 191, 168);
   font-size: 17px;
   /* font-weight: lighter; */
   margin-top: 2px;
}

.movieInfo {
   display: flex;
   align-items: center;
   justify-content: center;
}
.anotherFormattingDiv {
   display: flex;
   align-items: center;
}
.setWidth {
   width: 69vw;
   margin: 0 auto;
}
.plotText {
   margin-top: 10px;
   margin-bottom: 20px;
}
</style>
