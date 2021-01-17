<template>
<div class="contentGridContainer">


   <div class="movieInfo">
       <img :src="movie.poster" />
   </div>
   <div class="movieInfoContainer">
      <h1>{{ movie.title }}</h1>
      <h3>{{ movie.genre }}</h3>
      <h3><span></span> | {{ movie.length }}</h3>
      <h3><span></span> | {{ movie.runtime }}</h3>
      <h3><span></span> | {{ movie.rated }}</h3>
      <h4> Language: {{ movie.language }} </h4>
      <h5><span></span> Director: {{ movie.director }}</h5>
      <h5><span></span> Actors: {{ movie.actors }}</h5>
      
      <h4>{{ movie.plot.substring(0, 1000).trimRight() }}...</h4>
   </div>
   <FilteredShowingList/>
</div>
</template>

<script>

import FilteredShowingList from "../components/FilteredShowingList.vue";

export default {
     computed: {
    title() {
      // get showing id from url parameter
      return this.$route.params.title.replace('-', '');;
    },
   movie(){
      return this.$store.state.movies.filter(movie => movie.title == this.title)[0]
    },
  },
  
};
</script>
<style scoped>
a {
   text-decoration: none;
   color: wheat;
   margin: 0;
   padding: 0;
}
h1 {
   margin-top: 10px;
}
h3 {
   display: inline;
   color: rgba(245, 222, 179, 0.432);
}
h4 {
   margin-top: 7px;
   margin-bottom: 7px;
   color: rgb(50, 114, 136);
   font-size: 20px;
   margin-right: 35vh;
}
h5{
   font-size: 20px;
}

.movieiInfo {
   display: flex;
   background-color: rgba(51, 51, 51, 0.39);
   box-shadow: 0 0 5px 0 rgb(59, 81, 105);
   float: left;
}
.movieInfoContainer {
   margin: 50px 20px 200px -450px;
   float: left;
   
}
.contentGridContainer{
   margin-top: 10vh;
   margin-bottom: 20vh;
}
</style>
