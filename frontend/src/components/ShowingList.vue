<template>
   <div class="flexBox_showingList">
      <ShowingItem
         class="showingItem"
         v-for="movie of firstFiveItems(movies)"
         :key="movie.id"
         :moviePoster="movie.poster"
         :movieTitle="movie.title"
      />
   </div>
</template>

<script>
import ShowingItem from "./ShowingItem.vue";

export default {
   components: {
      ShowingItem,
   },
   computed: {
      movies() {
         return this.$store.state.movies.filter(x => x.title.length < 15 && x.title.length > 5);
      },
   },
   methods: {
      firstFiveItems(item) {
         let yupItsALocalVariable = item.slice();
         return yupItsALocalVariable.splice(0, 5);
      },
   },
};
</script>

<style scoped>
.showingItem {
   flex-grow: 1;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
}
</style>