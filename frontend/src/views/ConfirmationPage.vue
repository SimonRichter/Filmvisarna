<template>
   <div class="print">
      <h1>Your booking</h1>
      <br>
      <br>
      <h2>Title: movieTitle</h2>
      <h2>Date: showingDate</h2>
      <h2>Theatre: LuigiStadium</h2>
      <h2>Salon: TheOneSalon</h2>
      <h2>Tickets: 4</h2>
      <h2>Ticket types: 2 Adult, 1 Child, 1 Senior</h2>
      <h2>Total: 400kr</h2>
      <button @click.prevent="confirmBooking">Confirm</button>
      <button class="hiddenButton" @click="printBookingDetails">Print</button>
   </div>
</template>

<script>
export default {
  props: ["itemName", "todoIndex"],
  methods: {
    confirmBooking() {
      console.log("Confirming booking: ", this.itemName);
      this.$store.commit("deleteTodo", this.todoIndex);
    },
   printBookingDetails() {
      window.print();
      return false;
   }
  },
};
</script>

<style scoped>
h1 {
   text-align: center;
}
</style>