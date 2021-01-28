<template>
  <div class="setWidth">
    <div class="movieInfo">
      <div class="videoContainer">
        <video
          @click="playPause()"
          ref="trailerVideo"
          width="1220"
          height="400"
          :src="movie.trailer"
        ></video>
        <img
         @click="playPause()"
          src="../pictures/playbutton.svg"
          class="buttonColor"
          v-bind:class="{ hideButton: playing, showButton: !playing }"
        />
      </div>
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
</template>

<script>
import AvailableShowing from "../components/AvailableShowing.vue";

export default {
  // props:{dp:"dayPicked",mp:"monthPicked"},

  components: {
    AvailableShowing,
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
.hideButton {
  visibility: hidden;
}
.showButton {
  visibility: visible;
}
.buttonColor {
  width: 7%;
  color: #5e0202;
  filter: invert(6%) sepia(96%) saturate(4244%) hue-rotate(10deg)
    brightness(99%) contrast(111%);

  position: absolute;
  left:45vw;
  top:300px;

}

video {
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

.setWidth {
  padding-top: 50px;
  width: 69vw;
  margin: 0 auto;
}
.plotText {
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>
