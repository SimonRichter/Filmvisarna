<template>
  <h2>Current bookings</h2>
  <currentBookingsItem
    v-for="(show, index) in showingInfoArr"
    :key="index"
    :showing="show"
    :booking="currentBookingsArr[index]"
    :movieTitle="show[0].title"
    :salon="show[0].salon"
    :date="show[0].date"
    :time="show[0].time"
    :seats="currentBookingsArr[index].seatIndexes"
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
  letter-spacing: 2px;
  color: rgb(161, 152, 138);
  margin-top: 60px;
  text-align: center;
  grid-column: 1/3;
  border-bottom: 1px solid #6e1020;
  padding: 16px;
}
</style>