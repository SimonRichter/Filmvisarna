<template>
  <div class="filteredShowingList">
    <FilteredShowingItem/>
  </div>
</template>

<script>
import FilteredShowingItem from "./FilteredShowingItem.vue"
export default {
  
  computed: {
     showingsStore(){
      return this.$store.state.showings;
    },
    title() {
      // get showing id from url parameter
      let id = this.$route.params.title.replace('-', '');;
      console.log("id filteredshowinglist: ", id)
      return id;
    },
     showings() {
      return this.$store.state.showings.filter((obj) => obj.title == this.title);
    },
  }

}
</script>

<style scoped>
  .temp{
   color:beige;
}
.bookButton{
   display: flex;
   margin-bottom: 10px;
}
</style>