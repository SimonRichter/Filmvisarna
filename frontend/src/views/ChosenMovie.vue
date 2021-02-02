<template>
  <div class="contentGridContainer">
    <div class="trailer">
      <div class="videoContainer">
        <video
          @click="playPause()"
          ref="trailerVideo"
          width="1220"
          height="400"
          :src="'https://imdb-video.media-imdb.com/vi563330585/1434659607842-pgv4ql-1584637373251.mp4?Expires=1612369847&Signature=ZUHlJZSL56u3Sq4dpDE-R4Og1lerOG-SImkzAu8P~OB50lFrfVB-ZSogGv-gWJJIoAUCsPdP-t6gIzpMO~Sk3V106qltMt7i3-3R3vtugrTumcrP0aJWKSuv3nAlevhxpkPvFp-IE-YQ50CCRjeQ77jDO9pF5W8CiBR5~~FhzZ6a88f8219yQaidqyffB8RPRTLmVlPYmfoLpqdkkv9BRYEoOhDC0ZkxLPWXPsVy9azBxr-A3QJ2BCLAnqmaR5eTzPvbtjvD-omRTHODW9iUoBw~ehVOOJPYmVtpbyS54a9rE2hI3-2MlSFWoFLhKqISvTIyqfh1mnBs-uiA6~LjYw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA'"
        ></video>
        <img
          @click="playPause()"
          src="../pictures/playbutton.svg"
          class="buttonColor"
          v-bind:class="{ hideButton: playing, showButton: !playing }"
        />
      </div>
    </div>
    <h1>{{ movie.title }}</h1>
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
import Footer from "../components/Footer.vue"

export default {
  components: {
    AvailableShowing,Footer
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
}

h1{
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

.trailer {
  grid-column: 1/3;
}

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
  width: 7%;
  color: #5e0202;
  filter: invert(6%) sepia(96%) saturate(4244%) hue-rotate(10deg)
    brightness(99%) contrast(111%);
  position: absolute;
  left: 45vw;
  top: 300px;
}
</style>
<style>
.availableShowing {
  grid-column: 1/3;
  margin-top: 4vw;
}
</style>
