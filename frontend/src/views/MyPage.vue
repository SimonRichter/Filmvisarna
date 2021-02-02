<template>
   <div class="contentGridContainer">
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

<style>

.ticketContainer{
   display: flex;
   padding: 20px;
   height: 150px;
   justify-content: space-between;
   background-color:rgba(51, 51, 51, 0.39);
   border-radius: 5px;
}

.titleSalon > *{
   color: rgb(116, 109, 98);
}

.what > .bookingId{
   color: rgb(116, 109, 98);
   font-size: 14px;
}

.whereWhen{
   display: flex;
   flex-direction: column;
   justify-content: space-around;
}

.what{
   display: flex;
   flex-direction: column;
   justify-content: space-around;
  
   
}
</style>
<style scoped>
.contentGridContainer:not(:first-child) {
   grid-gap: 2vw;
}
</style>