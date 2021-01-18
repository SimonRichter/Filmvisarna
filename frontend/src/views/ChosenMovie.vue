<template>
  <div class="contentGridContainer">
    <div class="movieInfo">
      <h2>
        <!-- Filmvisarna:  <span> {{ whichTheater.theatre }}</span>-->
      </h2>
      <img :src="movie.poster" />
    </div>
    <div class="movieInfoContainer">
      <h1>{{ movie.title }}</h1>
      <h3>{{ movie.genre }}</h3>
      <h3><span></span> | {{ movie.length }}</h3>
      <h3><span></span> | {{ movie.runtime }}</h3>
      <h3><span></span> | {{ movie.rated }}</h3>
      <h4>Language: {{ movie.language }}</h4>
      <h5><span></span> Director: {{ movie.director }}</h5>
      <h5><span></span> Actors: {{ movie.actors }}</h5>

      <h4>{{ movie.plot.substring(0, 1000).trimRight() }}...</h4>
    </div>

    <div class="showingList" v-for="showing of showings" :key="showing.id">
      <div class="temp">
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
        {{ showing.date }} || {{ showing.time }} || {{ showing.theatre }} ||
        {{ showing.salon }}
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
  color: wheat;
  font-size: 20px;
  margin-right: 35vh;
}
h5 {
  font-size: 20px;
}

.movieiInfo {
  display: flex;
  background-color: rgba(51, 51, 51, 0.39);
  box-shadow: 0 0 5px 0 rgb(59, 81, 105);
  float: left;
  grid-area: 1/1/2/2;
}
.movieInfoContainer {
  grid-area: 2/1/3/3;
  margin-bottom: 10vh;
}
.contentGridContainer {
  margin-top: 10vh;
  
}
.temp {
  color: beige;
}
.showingList {

  grid-column-start: 1;
  grid-column-end: 3;
   border-bottom: 1px solid red;
   padding: 10px 16px;
}
.bookButton {
  display: flex;
  float: left;
  margin-bottom: 10px;
  margin-right: 20px;
  cursor: pointer;
}
</style>
