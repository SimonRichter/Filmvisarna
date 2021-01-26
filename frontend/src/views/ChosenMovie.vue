<template>
   <div class="setWidth">
      <div class="movieInfo">
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
      <ShowingsFilter
         :options="['Show All', 'Theatre 1', 'Theatre 2']"
         :default="'Filter by Theatre'"
         class="select"
         @input="addFilterItem($event)"
      />
      <p class="plotText">{{ movie.plot.substring(0, 1000).trimRight() }}...</p>
   </div>

   <div
      class="showingList"
      v-for="showing of filteredShowings"
      :key="showing.id"
   >
      <div class="anotherFormattingDiv">
         <button
            class="bookButton"
            @click="
               $router.push(
                  '/chosen-movie/' + showing.title + '/booking/' + showing.id
               )
            "
         >
            Book
         </button>
         <h3 class="noTopMargin">
            {{ showing.date }} - {{ showing.time }} | {{ showing.theatre }} |
            {{ showing.salon }}
         </h3>
      </div>
   </div>
</template>

<script>
import ShowingsFilter from "../components/ShowingsFilter.vue";
export default {
   components: {
      ShowingsFilter,
   },
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
      filteredShowings() {
         console.log("Running filteredShowings()");
         let item = this.$store.state.showingsFilterItem;
         if (
            item === null ||
            item === "Show All" ||
            item === "Filter by Theatre"
         ) {
            console.log("Showing all");
            return this.showings;
         } else {
            console.log("Trying to filter by: ", item);
            return this.showings.filter((showing) =>
               showing.theatre.includes(item)
            );
         }
      },
   },
   methods: {
      addFilterItem(itemName) {
         console.log(itemName);
         this.$store.state.showingsFilterItem = itemName;
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
button {
   text-align: center;
   border: #6e1020 1px solid;
   background-color: #131313;
   border-radius: 5px;
   color: rgb(238, 220, 192);
   font-family: "Bebas Neue", cursive;
   width: 60px;
   padding-left: 9px;
   padding-top: 2px;
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
h2 {
   display: inline;
   font-size: 24px;
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
   margin-top: 2px;
}

.movieInfo {
   display: flex;
   align-items: center;
   justify-content: center;
}
.showingList {
   grid-column-start: 1;
   grid-column-end: 3;
   border-top: 1px solid #6e1020;
   padding: 5px 0px 5px 0px;
   margin: 0px 15vw 0px 15vw;
}
.bookButton {
   margin-right: 20px;
   cursor: pointer;
}
.anotherFormattingDiv {
   display: flex;
   align-items: center;
}
.setWidth {
   padding-top: 50px;
   width: 69vw;
   margin: 0 auto;
}
.plotText {
   margin-top: 10px;
   margin-bottom: 20px;
}
.noTopMargin {
   margin-top: 0;
}
</style>
