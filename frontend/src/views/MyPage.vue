<template>
   <div class="contentGridContainer">
      <h2>My Page</h2>
      <CurrentBookings />
      <OldBookings />
   </div>
</template>

<script>
import CurrentBookings from "../components/CurrentBookings.vue";
import OldBookings from "../components/OldBookings.vue";
export default {
   components: {
      CurrentBookings,
      OldBookings,
   },
};
</script>

<style scoped>
h2 {
   grid-column-start: 1;
   grid-column-end: 3;
   text-align: center;
}
.contentGridContainer:not(:first-child) {
   grid-gap: 2vw;
}
</style>