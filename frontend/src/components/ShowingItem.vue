<!--
1. Get movie index
2. Get title of movie ??? 
3. Get poster of movie
4. Have a routerlink for the poster to get to chosen-movie-view
-->
<template>
  <router-link :to="'/chosen-movie/' + movieId">
    <img :src="image" />
  </router-link>
</template>

<script>
export default {
  props: ['movieId', 'image']
}
</script>

<style>

</style>