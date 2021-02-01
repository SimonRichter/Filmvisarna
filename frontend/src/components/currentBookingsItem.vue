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
    "showing",
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
      console.log("im clicking and the option is", option);
      if (option) {
        console.log("Delete booking", this.booking);
        this.$store.dispatch("deleteBooking", this.booking);
        this.updateSeatsInBackend();
        // DELETE BOOKING AND REMOVE THE SEATS FROM SHOWING
      }
      this.showModal = false;
    },
    updateSeatsInBackend() {
      console.log("seats", this.seats);
      let seatsArray = this.seats.split(",");
      for (let i = 0; i < seatsArray.length; i++) {
        let index = seatsArray[i] - 1;
        console.log("this.seatsArray[i]", index);
        console.log("this.showing", this.showing);
        this.showing[0].seats[index] = false;
      }
      this.$store.dispatch("updateSeatsInBackend", this.showing);
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