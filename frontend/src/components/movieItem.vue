<template>
  <router-link :to="'/chosenmovie/' + movie.title">
    <img :src="imageUrl" />
    <h1>{{ movieTitle }}</h1>
  </router-link>
  <h2>{{ movieGenres.join(', ')}}</h2>
  <h2> | {{ movieLength }}</h2>
  <h2> | {{ ageClassification }}</h2>
</template>

<script>
export default {
  props: ["movieTitle", "movieGenres", "imageUrl", "movieLength", "ageClassification"],
};
</script>

<style scoped>

h2 {
  display: inline;
}

</style>