<template>
  <ShowingsFilter
    :options="['Show All', 'Theatre 1', 'Theatre 2']"
    :default="'Filter by Theatre'"
    class="select"
    @input="addFilterItem($event)"
  />
  <div class="calenIcon noselect" @click="show()">📅</div>
  <div ref="draggableContainer" id="draggable-container">
    <div id="draggable-header" @mousedown="dragMouseDown">
      <Calendar v-if="showCalen" v-on:datePicked="what" />
    </div>
  </div>

  <div v-if="showings.length && new Date(today()) > new Date() - 86400000">
    <div class="showingList" v-for="showing of filteredShowings" :key="showing">
      <div class="anotherFormattingDiv">
        <button
          class="bookButton grow"
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
    return {
      showCalen:false,
      hello: 0,
      bye: 0,
      positions: {
        clientX: undefined,
        clientY: undefined,
        movementX: 0,
        movementY: 0,
      },
    };
  },

  methods: {
     show(){
       console.log(this.showCalen)
      return this.showCalen=!this.showCalen
    },
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
    dragMouseDown: function (event) {
      event.preventDefault();
      // get the mouse cursor position at startup:
      this.positions.clientX = event.clientX;
      this.positions.clientY = event.clientY;
      document.onmousemove = this.elementDrag;
      document.onmouseup = this.closeDragElement;
    },
    elementDrag: function (event) {
      event.preventDefault();
      this.positions.movementX = this.positions.clientX - event.clientX;
      this.positions.movementY = this.positions.clientY - event.clientY;
      this.positions.clientX = event.clientX;
      this.positions.clientY = event.clientY;
      // set the element's new position:
      this.$refs.draggableContainer.style.top =
        this.$refs.draggableContainer.offsetTop -
        this.positions.movementY +
        "px";
      this.$refs.draggableContainer.style.left =
        this.$refs.draggableContainer.offsetLeft -
        this.positions.movementX +
        "px";
    },
    closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
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
.calenIcon{
  font-size: 40px;
  width: fit-content;
  cursor: pointer;
  position: absolute;
  left: 40vw;
   top: 35vw;
  z-index: 1;
}
.noMovie {
  text-align: center;
  padding: 20px 0 40px 0;
  margin-top: 150px;
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

.grow:hover {
  -webkit-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2);
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
#draggable-container {
    width: 0%;
  position: absolute;
  z-index: 9;
  }
#draggable-header {
  width: 0%;
  z-index: 10;
}
</style>