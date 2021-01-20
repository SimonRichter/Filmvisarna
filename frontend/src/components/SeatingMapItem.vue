<template>
  <div class="chair">
    {{ seatIndex }}
    <div
      @click="
        changeTickets;
        clicked = !clicked;
      "
      class="available"
      v-if="availableSeat == null || availableSeat == false"
    >
      {{ content }}
    </div>
    <div class="taken" v-else>Taken</div>
  </div>
</template>

<script>
export default {
  emits: ["addTicket"],
  props: ["showing", "seatIndex"],
  data() {
    return {
      content: "Available",
      clicked: true,
    };
  },
  computed: {
    availableSeat() {
      return this.showing.seats[this.seatIndex];
    },
    changeTickets() {
      console.log("this.clicked", this.clicked);
      this.content = this.clicked == false ? "Available" : "Reserved";
      console.log("this.content", this.content);
      if (this.clicked == true) {
        console.log("should add a ticket");
        this.$emit("addTicket", this.seatIndex);
      } else {
        console.log("should remove a ticket");
        this.$emit("addTicket", null);
      }
    },
  },
};
</script>

<style scoped>
.chair {
  width: fit-content;
  height: fit-content;
  border: black 1px solid;
  background-color: blue;
  cursor: pointer;
  float: left;
}
.available:hover {
  background-color: rgb(115, 115, 238);
}
</style>