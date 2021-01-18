<template>
  <div class="filteredList">
    <FilteredItem
      v-for="showing of showings"
      :key="showing.title"
      :title="showing.title"
      :time="showing.time"
      :date="showing.date"
      :seats="showing.seats"
    />
  </div>
</template>

<script>
import FilteredItem from "./FilteredItem.vue";
export default {
  components: {
      FilteredItem
   },
  computed: {
    showings() {
         return this.$store.state.showings;
      },
    title() {
      // get showing id from url parameter
      let title = this.$route.params.title.replace("-", "");
      console.log("id filteredshowinglist: ", title);
      return title;
    },
    showings() {
      return this.$store.state.showings.filter(
        (obj) => obj.title == this.title
      )[0];
    },
  },
};
</script>

<style scoped>
.temp {
  color: beige;
}
.bookButton {
  display: flex;
  margin-bottom: 10px;
}
.filteredList {
   grid-area: 3/1/4/3;
  display: flex;
  border-top: 1px white solid;
}

</style>