<template>
  <div id="contentDiv">
    <div id="backgroundDiv">
      <h1>Your booking</h1>
      <div id="pictureSeparatorDiv">
        <img :src="moviePoster" />
        <div>
          <h2>{{ showing.title }}</h2>
          <h4>{{ showing.theatre }}, {{ showing.salon }}</h4>
          <h3>{{ showing.date }} {{ showing.time }}</h3>

          <!-- <h4>{{ showing.salon }}</h4> -->
          <!-- <h2>{{ bookingObj.tickets.length }}</h2> -->
          <br />
          <h4>Ticket types:</h4>
          <div v-for="ticket in bookingObj.tickets" :key="ticket">
            <div v-if="ticket.value > 0">
              <h3>{{ ticket.value }} {{ ticket.title }}</h3>
            </div>
          </div>
          <br />
          <h4>Total:</h4>
          <h3>{{ bookingObj.totalSum }} kr</h3>
          <!-- Bookin ID will be changed after a booking id is uniqely created in Sprint 2-->
          <h4>
            Booking ID: <a>{{ showing.id }}</a>
          </h4>
        </div>
      </div>
      <h2 v-if="showToggle" class="emailSentNotification">
        An email with your booking information was sent to your mail
      </h2>
      <div class="buttonsDiv">
        <router-link :to="'/'">
          <button class="cancelBtn" v-if="!showToggle" @click="cancelBooking()">
            Cancel
          </button>
        </router-link>

        <button
          v-if="!showToggle"
          @click="
            confirmBooking();
            removeSeatsBackend();
          "
        >
          Confirm
        </button>
        <button v-if="showToggle" @click="printBookingDetails">Print</button>
        <router-link :to="'/'">
          <button v-if="showToggle">Home</button>
        </router-link>
        <router-link :to="'/my-page/'">
          <button v-if="showToggle">My page</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      showToggle: false,
    };
  },

  computed: {
    // bookingId() {
    //    return this.$route.params.bookingId;
    // },

    moviePoster() {
      return this.$store.state.movies.filter(
        (x) => x.title === this.showing.title
      )[0].poster;
    },
    bookingObj() {
      return this.$store.state.bookingInfo;
    },
    showing() {
      return this.$store.state.bookingInfo.showing;
    },
    // showingObj() {
    //    return this.$store.state.showings.filter(
    //       (x) => x.id === this.showingId
    //    )[0];
    // },
  },

  methods: {
    confirmBooking() {
      //console.log("Confirming booking: ", this.itemName);
      this.showToggle = true;
    },
    printBookingDetails() {
      window.print();
      return false;
    },

    cancelBooking() {
      this.$store.dispatch("fetchShowings");
    },
    removeSeatsBackend() {
      this.$store.dispatch("updateSeatsInBackend", this.showing);
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  padding: 3vh 0 0 0;
  margin-bottom: 4vh;
}
a {
  font-family: "Open Sans Condensed", sans-serif;
}
button {
  cursor: pointer;
  display: inline;
  margin: 20px;
  background-color: #4caf50; /* Green */
  border: none;
  /* color: wheat; */
  padding: 6px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 28px;
  /* font-family: Oswald, sans-serif; */
  letter-spacing: 0.5px;
  font-weight: bold;
  border-radius: 5px;
}

img {
  margin-left: 10vw;
  max-height: 40vh;
  border-radius: 5px;
  margin-bottom: 3vh;
}

.buttonsDiv {
  max-width: fit-content;
  margin: 0 auto;
}

.cancelBtn {
  background-color: #940000;
}

.emailSentNotification {
  color: #4caf50;
  text-align: center;
}

#contentDiv {
  min-height: 100vh;
}

#backgroundDiv {
  margin: 6vh auto;
  max-width: 65vw;
  background-color: rgba(51, 51, 51, 0.664);
  box-shadow: #6e1020 0px 0px 5px 0px;
  border-radius: 5px;
}

#pictureSeparatorDiv {
  display: grid;
  grid-template-columns: 50% 50%;
}
</style>