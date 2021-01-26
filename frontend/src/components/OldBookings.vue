<template>
  <div class="oldTicketCont">
     <!-- <div class="whereWhen">
    <h4>{{ showing.theatre }}, {{ showing.salon }}</h4>
    <h3 class="dateTime">{{ showing.date }} {{ showing.time }}</h3>
    </div>
    <div class="what">
      <h3>{{ showing.title }}</h3>
      <div v-for="ticket in currentBookings.tickets" :key="ticket">
          <h3>{{ ticket.value }} {{ ticket.title }}</h3>
      </div>
      <h3>{{ currentBookings.totalSum }} kr</h3>
      <h4>{{ showing.id }}</h4> -->
  </div>
</template>

<script>
export default {
  computed: {
    showing() {
      return this.$store.state.showing;
    },
    currentBookings() {
      console.log("bookings: ", this.$store.state.bookingInfo)
      return this.$store.state.bookingInfo;
    },
  },
};
</script>

<style>

</style>