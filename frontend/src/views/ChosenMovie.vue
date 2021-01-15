<template>
<div class="contentGridContainer">


    <div class="movieInfo">
        <h2>
       Filmvisarna:  <span> {{ whichTheater.theatre }}</span>
      </h2>
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
         
   
  
      <div v-for="showing of showings" :key="showing.id">
        <div class="temp">{{showing.date}} - {{showing.time}} Title: {{showing.title}}  Seats available: {{showing.seats}}  <button class="bookButton" v-on:click="bookingmethod">Book</button> </div>
      </div>
</div>
</template>

<script>

export default {
     computed: {
    title() {
      // get showing id from url parameter
      let id =this.$route.params.title.replace('-', '');;
      console.log(id)
      return id;
    },
    
   movie(){
      let movie = this.$store.state.movies.filter(movie => movie.title == this.title)[0]
      console.log(movie)
      return movie
    },
    whichTheater() {
      let showing = this.$store.state.showings.filter((obj) => obj.title == this.title)[0];
      console.log(showing);
      return showing;
    },
     showings() {
      return this.$store.state.showings.filter((obj) => obj.title == this.title);
    },
    allMovies(){
      return this.$store.state.movies;
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
.temp{
   color:beige;
}
.bookButton{
   display: flex;
   margin-bottom: 10px;
}
</style>
