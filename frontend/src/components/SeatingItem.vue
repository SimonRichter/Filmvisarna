<template>
  <div>
    Hello Im Seating Item
    <div class="ticketTypes">
      <button onClick="getTicketTypes()" class="dropbtn">
        Choose ticket type
      </button>
      <div id="myDropDown" class="ticketTypes-content">
        <a href="#adult" onClick="addPrice">Vuxen</a>
        <a href="#child" onClick="addPrice">Barn</a>
        <a href="#pensioner" onClick="addPrice">Pensionär</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    tickets() {
      return this.$store.state.tickets;
    },
    getTicketTypes() {
      document.getElementById("myDropDown").classList.toggle("show");
    },
    addPrice() {
      console.log("I have clicked and should show ticket prices");
    },
  },
};
</script>

<style scoped>
div {
  width: 400px;
  height: 100px;
  background-color: burlywood;
}
.dropbtn {
  background-color: #3498db;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropbtn:hover,
.dropbtn:focus {
  background-color: #2980b9;
}

.ticketTypes {
  position: relative;
  display: inline-block;
}

.ticketTypes-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.ticketTypes-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.ticketTypes a:hover {
  background-color: #ddd;
}

.show {
  display: block;
}
</style>