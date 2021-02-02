<template>
  <router-link :to="'/chosen-movie/' + movieTitleForLink">
    <div class="movieItemContainer">
      <img :src="imageUrl" />
      <div class="infoContainer">
        <h2>{{ movieTitle }}</h2>
        <h3>{{ movieGenres }}</h3>
        <h3><span></span> | {{ movieLength }}</h3>
        <h3><span></span> | {{ ageClassification }}</h3>
        <p>{{ moviePlot.substring(0, 200).trimRight() }}...</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: [
    "movieTitle",
    "movieGenres",
    "imageUrl",
    "movieLength",
    "ageClassification",
    "moviePlot",
  ],
  computed: {
    movieTitleForLink() {
      return this.movieTitle.replaceAll(/ /g, "-");
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
h2 {
  margin-top: 10px;
}
h3 {
  display: inline;
}
p {
  margin-top: 5px;
  margin-bottom: 5px;
}
img {
  border-radius: 5px;
  height: 14vw;
}
.movieItemContainer {
  border-radius: 5px;
  display: flex;
  background-color: rgba(51, 51, 51, 0.39);
  box-shadow: 0 0 5px 0 #6e1020;
  transition: 150ms;
}
.movieItemContainer:hover {
  transform: scale(1.05);
  background-color: rgba(133, 133, 133, 0.295);
}

.infoContainer {
  margin: 0 20px 0 20px;
}
</style>