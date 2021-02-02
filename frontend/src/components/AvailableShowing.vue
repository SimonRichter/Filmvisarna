<template>
  <div class="availableShowing">
    <div class="calenderFilterContainer">
      <ShowingsFilter
        :options="['Show All', 'Theatre 1', 'Theatre 2']"
        :default="'Filter by Theatre'"
        class="select"
        @input="addFilterItem($event)"
      />
      <div class="calenIcon noselect" @click="show()">📅</div>
    </div>
    <div ref="draggableContainer" id="draggable-container">
      <div id="draggable-header" @mousedown="dragMouseDown">
        <transition
          name="custom-classes-transition"
          mode="out-in"
          enter-active-class="animate__animated animate__zoomIn"
          leave-active-class="animate__animated animate__zoomOut"
        >
          <Calendar v-if="showCalen" v-on:datePicked="what" />
        </transition>
      </div>
    </div>
  </div>

  <div
    class="showingsListContainer"
    v-if="showings.length && new Date(today()) > new Date() - 86400000"
  >
    <div class="showingList" v-for="showing of filteredShowings" :key="showing">
      <div class="anotherFormattingDiv">
        <div v-if="member">
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
        </div>
        <div v-else>
          <button class="popup bookButton" @click="popUp()">
            Book
            <span class="popuptext" id="myPopup"
              >You need to Sign In First</span
            >
          </button>
        </div>
        <h3 class="noTopMargin" v-if="showings.length">
          <span>{{ showing.date }}</span
          ><span>{{ showing.time }}</span
          ><span>{{ showing.theatre }}</span>
          <span>{{ showing.salon }}</span>
        </h3>
      </div>
    </div>
  </div>
  <div class="noMovie space" v-else>
    --- NO BOOKINGS AVAILABLE FOR THE SELECTED DATE ---
  </div>
</template>

<script>
import ShowingsFilter from "./ShowingsFilter.vue";
import Calendar from "./Calendar.vue";
import About from "../views/About.vue";

export default {
  components: {
    Calendar,
    ShowingsFilter,
    About,
  },

  data() {
    return {
      signIn: false,
      showCalen: false,
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
    popUp() {
      const popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
    },
    goSignIn() {
      return (this.signIn = !this.signIn);
    },
    show() {
      console.log("calen here??", this.showCalen);
      return (this.showCalen = !this.showCalen);
    },
    what(dayPicked, monthPicked) {
      this.hello = dayPicked;
      this.bye = monthPicked;
    },
    today() {
      const x = new Date();
      const year = x.getFullYear();
      const month = this.bye || x.getMonth() + 1;
      const day = this.hello || x.getDate();
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
    member() {
      console.log("acwecwecew", this.$store.state.member);
      return this.$store.state.member;
    },

    title() {
      // get showing id from url parameter
      return this.$route.params.title.replaceAll("-", " ");
    },

    filteredShowings() {
      let item = this.$store.state.showingsFilterItem;
      if (
        item === null ||
        item === "Show All" ||
        item === "Filter by Theatre"
      ) {
        return this.showings;
      } else {
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
.showingsListContainer {
  height: 330px;
}
.signInButton {
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  color: rgb(116, 109, 98);
  padding: 16px 18px;
  font-size: 20px;
  z-index: 100;
}
.calenIcon {
  font-size: 40px;
  width: fit-content;
  cursor: pointer;
  left: 40vw;
  top: 38vw;
  z-index: 1;
}
.noMovie {
  text-align: center;
  padding: 20px 0 40px 0;
  height: 330px;
  border-top: 1px solid #6e1020;
}

.showingList {
  border-top: 1px solid #6e1020;
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
  transition: 200ms;
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
.noTopMargin > span {
  padding: 15px 25px 20px;
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
.popup {
  position: relative;
  display: inline-block;
  cursor: pointer;
}
.popup .popuptext {
  visibility: hidden;
  width: 160px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -80px;
}

.popup .popuptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.popup .show {
  visibility: visible;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s;
}
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>