<template>
  <h2>Old bookings</h2>
  <currentBookingsItem
    v-for="(show, index) in showingInfoArr"
    :key="index"
    :movieTitle="show[0].title"
    :salon="show[0].salon"
    :date="show[0].date"
    :time="show[0].time"
    :tickets="currentBookingsArr[index].tickets"
    :totalSum="currentBookingsArr[index].totalSum"
    :bookingId="currentBookingsArr[index].id"
  />
</template>

<script>
import currentBookingsItem from "./currentBookingsItem.vue";
export default {
  components: {
    currentBookingsItem,
  },
  computed: {
    memberEmail() {
      return this.$store.state.member.email;
    },
    currentBookingsArr() {
      let getBookings = this.$store.state.bookings.filter(
        (booking) => booking.userEmail == this.memberEmail
      );

      console.log("-- filtered bookings: ", getBookings);
      return getBookings;
    },
    showingInfoArr() {
      const showingsArr = [];
      for (let i = 0; i < this.currentBookingsArr.length; i++) {
        let getShowings = this.$store.state.showings.filter(
          (show) => show.id == this.currentBookingsArr[i].showingId
        );
        showingsArr.push(getShowings);
      }
      console.log("-- filtered showings ", showingsArr);
      return showingsArr;
    },
  },
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