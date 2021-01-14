<template>
   <router-link :to="'/chosen-movie/' + movieTitleForLink">
      <div class="movieItemContainer">
         <img :src="imageUrl" />
         <div class="infoContainer">
            <h1>{{ movieTitle }}</h1>
            <h3>{{ movieGenres }}</h3>
            <h3><span></span> | {{ movieLength }}</h3>
            <h3><span></span> | {{ ageClassification }}</h3>
            <h4>{{ moviePlot.substring(0, 200).trimRight() }}...</h4>
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
      "movieTitleForLink",
   ],
   computed: {
      movieTitleForLink() {
         return this.movieTitle.replace(/ /g, "-");
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
img {
   border-radius: 5px;
   width: 10vw;
   height: 30vh;
}
.movieItemContainer {
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