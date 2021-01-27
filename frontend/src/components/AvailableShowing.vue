<template>
  <ShowingsFilter
    :options="['Show All', 'Theatre 1', 'Theatre 2']"
    :default="'Filter by Theatre'"
    class="select"
    @input="addFilterItem($event)"
  />

  <div v-if="showings.length && new Date(today()) > new Date() - 86400000">
    <div class="showingList" v-for="showing of filteredShowings" :key="showing">
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
        <h3 class="noTopMargin" v-if="showings.length">
          {{ showing.date }} - {{ showing.time }} | {{ showing.theatre }} |
          {{ showing.salon }}
        </h3>
      </div>
    </div>
  </div>
  <div class="noMovie" v-else>
    --- NO BOOKINGS AVAILABLE FOR THE SELECTED DATE ---
  </div>
  <Calendar v-on:datePicked="what" />
</template>

<script>
import ShowingsFilter from "./ShowingsFilter.vue";
import Calendar from "./Calendar.vue";
export default {
  components: {
    Calendar,
    ShowingsFilter,
  },

  data() {
    return { hello: 0, bye: 0 };
  },

  methods: {
    what(dayPicked, monthPicked) {
      this.hello = dayPicked;
      this.bye = monthPicked;
      console.log("testt", this.hello, this.bye);
    },
    today() {
      const x = new Date();
      const year = x.getFullYear();
      const month = this.bye || x.getMonth() + 1;
      const day = this.hello || x.getDate();
      console.log("inside", this.bye, this.hello);
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

    addFilterItem(itemName) {
      console.log(itemName);
      this.$store.state.showingsFilterItem = itemName;
    },
  },

  computed: {
    title() {
      // get showing id from url parameter
      return this.$route.params.title.replaceAll("-", " ");
    },

      filteredShowings() {
      console.log("Running filteredShowings()");
      let item = this.$store.state.showingsFilterItem;
      if (
        item === null ||
        item === "Show All" ||
        item === "Filter by Theatre"
      ) {
        console.log("Showing all");
        return this.showings;
      } else {
        console.log("Trying to filter by: ", item);
        return this.showings.filter((showing) =>
          showing.theatre.includes(item)
        );
      }
    },

    showings() {
      return this.$store.state.showings
        .filter((obj) => obj.title == this.title)
        .filter((obj) => obj.date == this.today());
    },

  
  },
};
</script>

<style scoped>
.noMovie {
  text-align: center;
  padding: 20px 0 40px 0;
  border-top: 1px solid #6e1020;
}

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
.noTopMargin {
   margin-top: 0;
}
</style>