<template>
   <h2>Booking history</h2>
   <div
      class="currentTicketCont"
      v-for="booking of oldBookings"
      :key="booking"
   >
      <div class="whereWhen" v-for="showing of newShowingsArr" :key="showing">
      <div v-for="index in showing" :key="index">
        <div v-if="index.date < today">
          <h4>{{ index.title }}, {{ index.salon }}</h4>
          <h3 class="dateTime">{{ index.date }} {{ index.time }}</h3>
        </div>
      </div>
    </div>
   </div>
</template>

<script>
export default {
  computed: {
    memberEmail() {
      return this.$store.state.member.email;
    },
    oldBookings() {
      console.log("this.userEmail computed: ", this.memberEmail);
      let x = this.$store.state.bookings.filter(
        (booking) => booking.userEmail == this.memberEmail
      );
      console.log("filteredBookings: ", x);

      return this.$store.state.bookings.filter(
        (booking) => booking.userEmail == this.memberEmail
      );
    },

    today() {
      let today = new Date();
      console.log('TODAY: ', today.toLocaleDateString())
      return today.toLocaleDateString()
    },

    newShowingsArr() {
      const showingsArr = [];
      for (let i = 0; i < this.oldBookings.length; i++) {
        let xFind = this.$store.state.showings.filter(
          (x) => x.id == this.oldBookings[i].showingId
        );
        console.log("49 ", xFind);
        showingsArr.push(xFind);
      }
      console.log("52 ", showingsArr);
      showingsArr.filter((date) => date.date >= this.today)
      console.log("54 ", showingsArr);
      return showingsArr;
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