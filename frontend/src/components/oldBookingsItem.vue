<template>

  <div v-if="new Date(date + ' ' + time) < Date.now()" class="ticketContainer oldBookingItem">
    <div class="whereWhen">
      <div class="titleSalon">
        <h4>{{ movieTitle }}</h4>
        <h4>{{ salon }}</h4>
      </div>
      <h4 class="dateTime">{{ time }} , {{ date }}</h4>
    </div>
    <div class="what">
      <h4 class="bookingId">{{ bookingId }}</h4>
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
    "bookingId",
  ],
};
</script>

<style scoped>
.oldBookingItem {
 height: 75px;
}
</style>