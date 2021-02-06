<template>
  <div class="videoContainer">
    <video
      @click="playPause()"
      ref="trailerVideo"
      width="1000"
      height="563"
      :src="movie.trailer"
    ></video>
    <img
      @click="playPause()"
      src="../pictures/playbutton.svg"
      class="buttonColor"
      v-bind:class="{ hideButton: playing, showButton: !playing }"
    />
  </div>

  <div class="contentGridContainer">
    <h1 class="movieTitleH1">{{ movie.title }}</h1>
    <div class="movieInfo1">
      <h2><span></span> {{ movie.length }}</h2>
      <h2><span></span> | {{ movie.runtime }}</h2>
      <h2><span></span> | {{ movie.rated }}</h2>
      <h2><span></span> | {{ movie.genre }}</h2>
    </div>
    <h3 class="lang">Language: {{ movie.language }}</h3>
    <div class="movieInfo2">
      <h3><span></span> Director: {{ movie.director }}</h3>
      <h3><span></span> Actors: {{ movie.actors }}</h3>
    </div>
    <p class="plotText">{{ movie.plot.substring(0, 1000).trimRight() }}...</p>
    <AvailableShowing />
  </div>
  <Footer />
</template>

<script>
import AvailableShowing from "../components/AvailableShowing.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    AvailableShowing,
    Footer,
  },

  data() {
    return { playing: false };
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
  methods: {
    playPause() {
      if (this.playing) {
        this.$refs.trailerVideo.pause();
        this.playing = !this.playing;
      } else {
        this.$refs.trailerVideo.play();
        this.playing = !this.playing;
      }
    },
  },
};
</script>

<style scoped>
.contentGridContainer {
  grid-gap: 1vw;
  padding-top: 2vw;
  width: 70vw;
  padding-bottom: 2vw;
}

.movieTitleH1 {
  color: rgb(150, 22, 43);
  text-shadow: 1px 1px rgb(206, 191, 168);
  letter-spacing: 3px;
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

.videoContainer {
  margin-top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
}
/*
video {
  border-inline: 7px black solid;
}*/

.movieInfo1 {
  grid-column: 1/3;
}

.lang {
  color: rgb(206, 191, 168, 0.8);
  grid-column: 1/3;
}

.movieInfo2 {
  grid-column: 1/3;
}

.plotText {
  grid-column: 1/3;
}

.hideButton {
  visibility: hidden;
}
.showButton {
  visibility: visible;
}
.buttonColor {
  height: 8%;
  color: #5e0202;
  filter: invert(6%) sepia(96%) saturate(4244%) hue-rotate(10deg)
    brightness(99%) contrast(111%);
  position: absolute;
  bottom: 48%;
  cursor: pointer;
}
</style>
<style>
.getTickets {
  grid-area: 7 / 1 / 8 / 3;
  letter-spacing: 2px;
}
.availableShowing {
  border-top: 1px #5e0202 solid;
  display: flex;
  grid-area: 7/1/8/3;
  /* grid-column: 1/3; */
  margin-top: 7vw;
}

.availableShowing > * {
  padding: 15px 20px 5px;
}
.showingsListContainer {
  grid-column: 1/3;
}
</style>
