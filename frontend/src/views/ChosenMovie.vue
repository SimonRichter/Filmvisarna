<template>
<div class="contentGridContainer">
    <div class="movieInfo">
        <h2>
       Filmvisarna:  <span> {{ showing.theatre }}</span>
      </h2>
       <img :src="movie.poster" />
       
      <br />
         <div class="infoContainer">
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
        
      
      <!-- Put all content here in grid container -->
    </div>
  </div>

</template>

<script>
/*
actors: "Wesley Snipes, Stephen Dorff, Kris Kristofferson, N'Bushe Wright"
awards: "5 wins & 11 nominations."
country: "USA"
director: "Stephen Norrington"
genre: "Action, Horror, Sci-Fi"
id: "QK_58ppl0-9ZdCjAbatBd"
language: "English, Russian, Serbian"
plot: "In a world where vampires walk the earth, Blade has a goal. His goal is to rid the world of all vampire evil. When Blade witnesses a vampire bite Dr. Karen Jenson, he fights away the beast and takes Jenson back to his hideout. Here, alongside Abraham Whistler, Blade attempts to help heal Jenson. The vampire Quinn who was attacked by Blade, reports back to his master Deacon Frost, who is planning a huge surprise for the human population."
poster: "https://m.media-amazon.com/images/M/MV5BOTk2NDNjZWQtMGY0Mi00YTY2LWE5MzctMGRhZmNlYzljYTg5XkEyXkFqcGdeQXVyMTAyNjg4NjE0._V1_SX300.jpg"
posterLandscape: "https://www.themoviedb.org/t/p/original/o4vSn07PXtQD0468pplBrCPBppu.jpg"
rated: "R"
released: "21 Aug 1998"
runtime: "120 min"
title: "Blade"
writer: "David S. Goyer"
year: "1998"
*/
export default {
     computed: {
    title() {
      // get showing id from url parameter
      let id =this.$route.params.id;
      console.log(id)
      return id;
    },
   movie(){
      let movie = this.$store.state.movies.filter(movie => movie.title == this.title)[0]
      console.log(movie)
      return movie
    },
    showing() {
      let showing = this.$store.state.showings.filter((obj) => obj.title == this.title)[0];
      console.log(showing);
      return showing;
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
   margin-top: 5px;
   color: rgb(0, 27, 36);
}
h5{
   font-size: 20px;
}

.movieiInfo {
   border-radius: 5px;
   display: flex;
   background-color: rgba(51, 51, 51, 0.39);
   margin: 0 20px 20px 20px;
   box-shadow: 0 0 5px 0 rgb(59, 81, 105);
}
.infoContainer {
   margin: 0 20px 0 20px;
}
</style>
