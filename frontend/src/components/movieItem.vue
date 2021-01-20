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
h2 {
   margin-top: 10px;
}
h3 {
   display: inline;
   /* color: rgba(245, 222, 179, 0.432); */
}
p {
   margin-top: 5px;
   /* color: wheat; */
}
img {
   border-radius: 5px;
   /* width: 10vw; */
   height: 30vh;
}
.movieItemContainer {
   border-radius: 5px;
   display: flex;
   background-color: rgba(51, 51, 51, 0.39);
   margin: 0 20px 20px 20px;
   box-shadow: 0 0 5px 0 #6e1020;
}
.infoContainer {
   margin: 0 20px 0 20px;
}
</style>