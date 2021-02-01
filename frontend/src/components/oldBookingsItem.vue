<template>
  <div class="ticketContainer oldBookingItem">
    <div class="whereWhen">
      <div class="titleSalon">
        <h4>{{ movieTitle }}</h4>
        <h4>{{ salon }}</h4>
      </div>
      <h4 class="dateTime">{{ time }} , {{ date }}</h4>
    </div>
    <div class="what">
      <h4>Seats: {{ seats }}</h4>
      <!-- <h4>Total: {{ totalSum }} kr</h4> -->
      <h4>{{ bookingId }}</h4>
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
    // "totalSum",
    "bookingId",
  ],
};
</script>

<style scoped>
.oldBookingItem {
  grid-column: 2;
}
</style>