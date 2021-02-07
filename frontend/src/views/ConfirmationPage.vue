<template>
  <div id="contentDiv">
    <div id="section-to-print" class="backgroundDiv">
      <h1>Your booking</h1>
      <div id="pictureSeparatorDiv">
        <img :src="moviePoster" />
        <img class="qr" src="../pictures/qr_code.png" />

        <div class="bookingInfo">
          <h2>{{ showing.title }}</h2>
          <h4>{{ showing.theatre }}, {{ showing.salon }}</h4>
          <h3>{{ showing.date }} {{ showing.time }}</h3>
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
          <br />
          <h4>
            Booking ID: <a>{{ showing.id }}</a>
          </h4>
        </div>
      </div>
      <h2 class="emailSentNotification">
        An email with your booking information was sent to your mail
      </h2>

      <div class="butCont">
        <button class="print" @click="printBookingDetails">Print</button>
        <router-link :to="'/'">
          <button>Home</button>
        </router-link>
        <router-link :to="'/my-page/'">
          <button>My page</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
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
  },

  methods: {
    printBookingDetails() {
      window.print();
      return false;
    },
  },
};
</script>

<style scoped>
.qr {
  visibility: hidden;
  margin: 0;
}
h1 {
  text-align: center;
  padding: 3vh 0 0 0;
  margin-bottom: 4vh;
}

h4 {
  font-size: 20px;
}

a {
  font-family: "Open Sans Condensed", sans-serif;
}
button {
  cursor: pointer;
  margin: 15px;
  margin-left: 3vw;
  background-color: #4caf50;
  border: none;
  padding: 6px 16px;
  text-decoration: none;
  font-size: 28px;
  letter-spacing: 0.5px;
  font-weight: bold;
  border-radius: 5px;
}

img {
  grid-column: 1;
  grid-row: 1;
  margin-left: 10vw;
  max-height: 40vh;
  border-radius: 5px;
  margin-bottom: 3vh;
}

.buttonsDiv {
  max-width: fit-content;
  margin: 0 auto;
}
.bookingInfo {
  grid-column: 2;
  grid-row: 1;
}
.print {
  margin-left: 21vw;
}

/* .cancelBtn {
   background-color: #940000;
} */

.emailSentNotification {
  color: #4caf50;
  text-align: center;
}

#contentDiv {
  min-height: 100vh;
}

.backgroundDiv {
  margin: 15vh auto;
  max-width: 65vw;
  background-color: rgba(51, 51, 51, 0.664);
  box-shadow: #6e1020 0px 0px 5px 0px;
  border-radius: 5px;
}

#pictureSeparatorDiv {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 2;
}

@media print {
  #section-to-print,
  #section-to-print * {
    visibility: visible;
  }
  .emailSentNotification {
    display: none;
  }
  .butCont {
    display: none;
  }
  img {
    width: 50%;
  }
  .qr {
    visibility: visible;

    margin-top: 180px;
      margin-left: 70px;
  }
}
</style>