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
      let array = this.$store.state.movies.filter((x) => x.title.length < 15 && x.title.length > 5);

      let j, k;

      for (let i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * i);
        k = array[i];
        array[i] = array[j];
        array[j] = k;
      }

      return array;
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