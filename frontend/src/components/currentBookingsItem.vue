<template>
  <div class="ticketContainer currentBookingItem">
    <div class="whereWhen">
      <h4>{{ movieTitle }}</h4>
       <h4>{{ salon }}</h4>
      <h3 class="dateTime">{{ date }} {{ time }}</h3>
    </div>
    <div class="what">
      <h4>Seats: {{ seats }}</h4>
      <h4>Total: {{ totalSum }} kr</h4>
      <h4>Booking ID: {{ bookingId }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "movieTitle",
    "salon",
    "date",
    "time",
    "seats",
    "totalSum",
    "bookingId",
  ],
};
</script>

<style scoped>
.currentBookingItem{
  grid-column: 1;
}
</style>