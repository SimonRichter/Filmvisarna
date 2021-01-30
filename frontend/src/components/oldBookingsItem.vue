<template>
  <div class="ticketContainer oldBookingItem">
    <div class="whereWhen">
      <h4>{{ movieTitle }}</h4>
      <h4>{{ salon }}</h4>
      <h3 class="dateTime">{{ date }} {{ time }}</h3>
    </div>
    <div class="what">
      <h3>{{ tickets }}</h3>
      <h3>Total: {{ totalSum }} kr</h3>
      <h3>Booking ID: {{ bookingId }}</h3>
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
    "tickets",
    "totalSum",
    "bookingId",
  ],
};
</script>

<style scoped>
.oldBookingItem {
  grid-column: 2;
}
</style>