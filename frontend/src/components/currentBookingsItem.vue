<template>
  <div
    v-if="date + ' ' + time >= new Date().toLocaleString()"
    class="ticketContainer currentBookingItem"
  >
    <div class="whereWhen">
      <div class="titleSalon">
        <h4>{{ movieTitle }}</h4>
        <h4>{{ salon }}</h4>
      </div>
      <h4 class="dateTime">{{ time }} , {{ date }}</h4>
      <button @click="showModal = true" class="cancel">
        <h4>Cancel booking</h4>
      </button>
    </div>
    <div class="what">
      <h4 class="seats">
        Seat{{ seats.includes(",") ? "s" : "" }}: {{ seats }}
      </h4>
      <h3 class="bookingId">Booking ID: <br />{{ bookingId }}</h3>
    </div>
  </div>
  <Modal
    @modalOption="deleteBooking"
    :showModal="showModal"
    :movieTitle="movieTitle"
    :seats="seats"
    :date="date"
    :time="time"
  />
</template>

<script>
import Modal from "./Modal.vue";

export default {
  props: [
    "showingId",
    "booking",
    "movieTitle",
    "salon",
    "date",
    "time",
    "seats",
    "bookingId",
  ],
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    deleteBooking(option) {
      if (option) {
        this.$store.dispatch("deleteBooking", this.booking);
        this.updateSeatsInBackend();
        // DELETE BOOKING AND REMOVE THE SEATS FROM SHOWING
      }
      this.showModal = false;
    },
    updateSeatsInBackend() {
      // Find the right show so the seats can be updated
      const showing = this.$store.state.showings.filter(
        (s) => s.id == this.showingId
      )[0];

      // seats are the indexes, needs to be seperated
      let seatsArray = this.seats.split(",");

      for (let i = 0; i < showing.seats.length; i++) {
        for (let j = 0; j < seatsArray.length; j++) {
          // The indexes are (-1) of the seats
          if (i == seatsArray[j] - 1) {
            showing.seats[i] = false;
          }
        }
      }
      this.$store.dispatch("updateSeatsInBackend", showing);
    },
  },
};
</script>

<style scoped>
.currentBookingItem {
  box-shadow: 1px 1px wheat;
}
.whereWhen > *,
.what > .seats {
  font-size: 22px;
}
button > h4 {
  font-size: small;
  color: #6e1020;
}
button {
  width: 100px;
  height: 30px;
  border: 1px solid #6e1020;
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #131313;
  transform: scale(1.05);
}
</style>