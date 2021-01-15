<template>
   <div id="contentDiv">
      <div id="backgroundDiv">
         <h1>Your booking</h1>
         <div id="pictureSeparatorDiv">
            <img
               src="https://m.media-amazon.com/images/M/MV5BOTk2NDNjZWQtMGY0Mi00YTY2LWE5MzctMGRhZmNlYzljYTg5XkEyXkFqcGdeQXVyMTAyNjg4NjE0._V1_SX300.jpg"
               alt="Movie poster image"
            />
            <div>
               <h2>{{ showingObj.title }}</h2>
               <h2>{{ showingObj.date }} {{ showingObj.time }}</h2>
               <h2>{{ showingObj.theatre }}</h2>
               <h2>{{ showingObj.salon }}</h2>
               <h2>{{ bookingObj.seats.length }}</h2>
               <h2>Ticket types: 2 Adult, 1 Child, 1 Senior</h2>
               <h2>Total: 400kr</h2>
               <h2>Booking ID: XxXXxXXXXXXX</h2>
            </div>
         </div>
         <h2 v-if="showToggle" class="emailSentNotification">
            An email with your booking information was sent to your mail
         </h2>
         <div class="buttonsDiv">
            <button v-if="!showToggle" @click.prevent="confirmBooking">
               Confirm
            </button>
            <button v-if="showToggle" @click="printBookingDetails">
               Print
            </button>
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
      bookingId() {
         return this.$route.params.bookingId;
      },
      showingId() {
         return this.$route.params.showingId;
      },
      bookingObj() {
         return this.$store.state.bookings.filter(
            (x) => x.id === this.bookingId
         )[0];
      },
      showingObj() {
         return this.$store.state.showings.filter(
            (x) => x.id === this.showingId
         )[0];
      },
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
   },
};
</script>

<style scoped>
h1 {
   text-align: center;
   padding: 3vh 0 0 0;
   margin-bottom: 4vh;
}

button {
   cursor: pointer;
   display: inline;
   margin: 20px;
   background-color: #4caf50; /* Green */
   border: none;
   color: wheat;
   padding: 6px 16px;
   text-align: center;
   text-decoration: none;
   display: inline-block;
   font-size: 28px;
   font-family: Oswald, sans-serif;
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
   box-shadow: rgb(59, 81, 105) 0px 0px 5px 0px;
   border-radius: 5px;
}

#pictureSeparatorDiv {
   display: grid;
   grid-template-columns: 50% 50%;
}
</style>