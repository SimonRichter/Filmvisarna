<template>
  <SeatingList />
</template>

<script>
import SeatingList from "./SeatingList.vue";
export default {
  components: {
    SeatingList,
  },
  computed: {
    seatsInTheatre(){
      return this.$store.state.showings
    }
  }
};
</script>

<style>
</style>