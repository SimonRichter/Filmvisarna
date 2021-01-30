<template>
   <div class="contentGridContainer">
      <h2>My Page</h2>
      <CurrentBookings />
      <!-- <OldBookings /> -->
   </div>
</template>

<script>
import CurrentBookings from "../components/CurrentBookings.vue";
// import OldBookings from "../components/OldBookings.vue";
export default {
   components: {
      CurrentBookings,
      // OldBookings,
   },
};
</script>

<style>
.ticketContainer{
   display: flex;
   border: 1px red solid;
   padding: 7px;
   height: 150px;
   width: 100%;
   justify-content: space-between;
}

.whereWhen{
   display: flex;
   flex-direction: column;
   justify-content: space-between;
}

.what{
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   text-align: end;
}
</style>
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