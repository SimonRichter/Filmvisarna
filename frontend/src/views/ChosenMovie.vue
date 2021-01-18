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
      <h3>{{ movie.genre }}</h3>
      <h3><span></span> | {{ movie.runtime }}</h3>
      <h3><span></span> | Rated: {{ movie.rated }}</h3>
      <h3><span></span> | Language: {{ movie.language }}</h3>
      <h3><span></span> | Director: {{ movie.director }}</h3>
      <h3><span></span> | Actors: {{ movie.actors }}</h3>
      <p>{{ movie.plot.substring(0, 1000).trimRight() }}...</p>

      <div class="showingList" v-for="showing of showings" :key="showing.id">
         <div class="anotherFormattingDiv">
            <button
               class="bookButton"
               @click="
                  $router.push(
                     '/chosen-movie/' + showing.title + '/booking/' + showing.id
                  )
               "
            >
               <h4>Book</h4>
            </button>
            <h4 class="showingItemText">
               {{ showing.date }} - {{ showing.time }} | {{ showing.theatre }} |
               {{ showing.salon }}
            </h4>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   computed: {
      today() {
         const x = new Date();
         const year = x.getFullYear();
         const month = x.getMonth() + 1;
         const day = x.getDate();

         const date =
            year +
            "-" +
            (month < 10 ? "0" : "") +
            month +
            "-" +
            (day < 10 ? "0" : "") +
            day;
         return date;
      },

      tomorrow() {
         const today = new Date();
         const x = new Date(today);
         x.setDate(x.getDate() + 1);
         const year = x.getFullYear();
         const month = x.getMonth() + 1;
         const day = x.getDate();

         const tomorrow =
            year +
            "-" +
            (month < 10 ? "0" : "") +
            month +
            "-" +
            (day < 10 ? "0" : "") +
            day;

         return tomorrow;
      },

      dayAfterTomorrow() {
         const today = new Date();
         const x = new Date(today);
         x.setDate(x.getDate() + 2);
         const year = x.getFullYear();
         const month = x.getMonth() + 1;
         const day = x.getDate();

         const dayAfterTomorrow =
            year +
            "-" +
            (month < 10 ? "0" : "") +
            month +
            "-" +
            (day < 10 ? "0" : "") +
            day;

         return dayAfterTomorrow;
      },

      title() {
         // get showing id from url parameter
         return this.$route.params.title.replace("-", " ");
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
      showings() {
         return this.$store.state.showings
            .filter((obj) => obj.title == this.title)
            .filter(
               (obj) =>
                  obj.date == this.today ||
                  obj.date == this.tomorrow ||
                  obj.date == this.dayAfterTomorrow
            );
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
   margin-top: 70px;
   margin-bottom: 10px;
}
button {
   text-align: center;
   border: #dc0428 1px solid;
   background-color: rgb(0, 0, 0);
   border-radius: 5px;
   color: white;
   font-family: "Bebas Neue", cursive;
   width: 60px;
   padding-left: 10px;
   margin-top: 7px;
   margin-bottom: 7px;
   font-size: 20px;
}
button:active,
button:disabled {
   background-color: rgb(46, 46, 46);
}
button:disabled {
   cursor: default;
}
h1 {
   margin-top: 5px;
   margin-bottom: 10px;
}
h3 {
   display: inline;
   color: rgba(245, 222, 179, 0.432);
}
h4 {
   margin-top: 7px;
   margin-bottom: 7px;
   color: white;
   font-size: 20px;
}
p {
   margin-top: 10px;
   margin-bottom: 25px;
}

.movieInfo {
   display: flex;
   align-items: center;
   justify-content: center;
}
.showingList {
   border-top: 1px solid red;
}
.bookButton {
   margin-bottom: 10px;
   margin-right: 20px;
   cursor: pointer;
}
.anotherFormattingDiv {
   padding-top: 5px;
   padding-bottom: 2px;
   display: flex;
   align-items: center;
}
.setWidth {
   width: 80vw;
   margin: 0 auto;
}
</style>
