<template>

  <div class="showingList" v-for="showing of showings" :key="showing">
    <div class="anotherFormattingDiv">
      <button
        class="bookButton"
        @click="
          $router.push(
            '/chosen-movie/' + showing.title + '/booking/' + showing.id
          )
        "
      >
        Book
      </button>
      <h3>
        {{ showing.date }} - {{ showing.time }} | {{ showing.theatre }} |
        {{ showing.salon }}
      </h3>
    </div>
  </div>
   <Calendar v-on:datePicked="what" />
 
</template>

<script>
import Calendar from "./Calendar.vue";
export default {
  components: {
    Calendar,
  },

  methods: {
    what(dayPicked, monthPicked) {
      console.log("testt", dayPicked, monthPicked);
     
  
        return { dayPicked, monthPicked};
    },
  },

  computed: {
    today() {
      const x = new Date();
      const year = x.getFullYear();
      const month = this.monthPicked || 1;
      const day = this.dayPicked || 29;
      console.log("inside", this.dayPicked, this.monthPicked);
      const date =
        year +
        "-" +
        (month < 10 ? "0" : "") +
        month +
        "-" +
        (day < 10 ? "0" : "") +
        day;
      return date;
    },

    title() {
      // get showing id from url parameter
      return this.$route.params.title.replaceAll("-", " ");
    },
    
    showings() {
      return this.$store.state.showings
        .filter((obj) => obj.title == this.title)
        .filter((obj) => obj.date == this.today);
    },
   
  },
};
</script>

<style scoped>
.showingList {
  grid-column-start: 1;
  grid-column-end: 3;
  border-top: 1px solid #6e1020;
  padding: 5px 0px 5px 0px;
  margin: 0px 15vw 0px 15vw;
}
.bookButton {
  margin-right: 20px;
  cursor: pointer;
}

button {
  text-align: center;
  border: #6e1020 1px solid;
  background-color: #131313;
  border-radius: 5px;
  color: rgb(238, 220, 192);
  font-family: "Bebas Neue", cursive;
  width: 60px;
  padding-left: 9px;
  padding-top: 2px;
  margin-top: 7px;
  margin-bottom: 7px;
  font-size: 20px;
}
button:active,
button:disabled {
  background-color: rgb(46, 46, 46);
}
button:disabled {
  cursor: default;
}

h3 {
   color: rgb(206, 191, 168);
   font-size: 17px;
   /* font-weight: lighter; */
   margin-top: 2px;
}
.anotherFormattingDiv {
   display: flex;
   align-items: center;
}

</style>