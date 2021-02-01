<template>
   <div class="contentGridContainer">
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
   padding: 20px;
   height: 150px;
   justify-content: space-between;
   background-color:rgba(51, 51, 51, 0.39);
   border-radius: 5px;
}

.whereWhen > *, .what > h4:nth-child(1){
   font-size: 25px;
   
}

.titleSalon > *{
   color: rgb(116, 109, 98);
    text-decoration: underline;
}

.what > h4:nth-child(2){
   color: rgb(116, 109, 98);
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
.contentGridContainer{
   margin-top:100px;
}
h2 {
   grid-column-start: 1;
   grid-column-end: 3;
   text-align: center;
}
.contentGridContainer:not(:first-child) {
   grid-gap: 2vw;
}
</style>