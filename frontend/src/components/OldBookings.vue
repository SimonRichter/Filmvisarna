<template>
   <h2>Booking history</h2>
   <div
      class="currentTicketCont"
      v-for="booking of oldBookings"
      :key="booking"
   >
      <div class="whereWhen">
         <h4>{{ showing.theatre }}, {{ showing.salon }}</h4>
         <h3 class="dateTime">{{ showing.date }} {{ showing.time }}</h3>
      </div>
      <div class="what">
         <h3>{{ showing.title }}</h3>
         <div v-for="ticket in currentBookings.tickets" :key="ticket">
            <h3>{{ ticket.value }} {{ ticket.title }}</h3>
         </div>
         <h3>Total: {{ currentBookings.totalSum }} kr</h3>
         <h3>Booking ID: {{ showing.id }}</h3>
      </div>
   </div>
</template>

<script>
export default {
   computed: {
      showing() {
         return this.$store.state.bookingInfo.showing;
      },
      oldBookings() {
         this.$store.commit("setBookings", this.$store.state.bookingInfo);
         console.log("bookings: ", this.$store.state.bookings);
         let today = new Date()
         this.$store.state.bookings.filter((booking) => booking.date.includes(item));
      },
   },
};
</script>

<style scoped>
h2 {
   text-align: center;
   grid-column-start: 2;
   grid-column-end: 3;
   grid-row-start: 2;
   grid-row-end: 3;
}
h3 {
   margin-top: 0px;
}
.currentTicketCont {
   text-align: center;
   grid-column-start: 2;
   grid-column-end: 3;
   grid-row-start: 3;
   grid-row-end: auto;
}
</style>