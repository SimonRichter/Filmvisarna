<template>
  <div class="ticketContainer currentBookingItem">
    <div class="whereWhen">
      <div class="titleSalon">
        <h4>{{ movieTitle }}</h4>
        <h4>{{ salon }}</h4>
      </div>
      <h4 class="dateTime">{{ time }} , {{ date }}</h4>
    </div>
    <div class="what">
      <h4 class="seats">Seats: {{ seats }}</h4>
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
    "seats",
    "bookingId",
  ],
};
</script>

<style scoped>
.currentBookingItem{
  box-shadow: 1px 1px wheat;
}
.whereWhen > *, .what > .seats{
   font-size: 22px;
   
}
</style>