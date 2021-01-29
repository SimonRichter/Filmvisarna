<template>
   <h1>{{ currentBookings }}</h1>
   <h2>Current bookings</h2>
   <div
      class="currentTicketCont"
      v-for="booking of currentBookings"
      :key="booking"
   >
      <div class="whereWhen">
         <h4>{{ showing.theatre }}, {{ showing.salon }}</h4>
         <h3 class="dateTime">{{ showing.date }} {{ showing.time }}</h3>
      </div>
      <div class="what">
         <h3>{{ showing.title }}</h3>
         <h3>{{ booking.tickets }}</h3>
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
      userEmail() {
         return this.$store.state.member.email;
      },
      currentBookings() {
         this.$store.commit("setBookings", this.$store.state.bookingInfo);
         console.log("BookingInfo: ", this.$store.state.bookingInfo);
         console.log("Bookings: ", this.$store.state.bookings);
         console.log(
            "filteredBookings: ",
            this.$store.state.bookings.filter((booking) =>
               booking.userEmail.includes(this.userEmail)
            )
         );
         return this.$store.state.bookings;
         // .filter((booking) =>
         //    booking.userEmail.includes(this.userEmail)
         // );
      },
   },
   // methods: {
   //    getUserEmail() {
   //       console.log("Member: ", this.$store.state.member);
   //       console.log("Email: ", this.$store.state.member.email);
   //       return this.$store.state.member.email;
   //    },
   // },
};
</script>

<style scoped>
h2 {
   text-align: center;
   grid-column-start: 1;
   grid-column-end: 2;
}
h3 {
   margin-top: 0px;
}
.currentTicketCont {
   text-align: center;
   grid-column-start: 1;
   grid-column-end: 2;
   grid-row-start: 3;
   grid-row-end: auto;
}
</style>