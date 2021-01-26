<template>
  <div class="currentTicketCont" v-for="booking of currentBookings" :key="booking">
    <div class="whereWhen">
      <h4>{{ showing.theatre }}, {{ showing.salon }}</h4>
      <h3 class="dateTime">{{ showing.date }} {{ showing.time }}</h3>
    </div>
    <div class="what">
      <h3>{{ showing.title }}</h3>
      <div v-for="ticket in currentBookings.tickets" :key="ticket">
        <h3>{{ ticket.value }} {{ ticket.title }}</h3>
      </div>
      <h3>{{ currentBookings.totalSum }} kr</h3>
     
      <h4>{{ showing.id }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    showing() {
      return this.$store.state.bookingInfo.showing;
    },
    currentBookings() {
      this.$store.commit("setBookings", this.$store.state.bookingInfo);
      console.log("bookings: ", this.$store.state.bookings);
      return this.$store.state.bookings;
    },
  },
};
</script>

<style>
</style>