<template>
  <h2>History</h2>
  <oldBookingsItem
    v-for="(show, index) in showingInfoArr"
    :key="index"
    :movieTitle="show[0].title"
    :salon="show[0].salon"
    :date="show[0].date"
    :time="show[0].time"
    :seats="currentBookingsArr[index].seatIndexes"
    :bookingId="currentBookingsArr[index].id"
  />
   <!-- :totalSum="currentBookingsArr[index].totalSum" -->
</template>

<script>
import oldBookingsItem from "./oldBookingsItem.vue";
export default {
  components: {
    oldBookingsItem,
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
  grid-column: 2;
  grid-row:1;
  border-bottom: 1px solid red;
  padding: 16px;
}
h3 {
  margin-top: 0px;
}
</style>