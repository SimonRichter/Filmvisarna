<template>
  <div class="chair">
    {{ seatIndex + 1 }}
    <div
      @click="addTicket"
      class="available"
      v-if="availableSeat == null || availableSeat == false"
    >
      Available
    </div>
    <div class="taken" v-else>Taken</div>
  </div>
</template>

<script>
export default {
  emits: ["addTicket"],
  props: ["showing", "seatIndex"],
  computed: {
    availableSeat() {
      return this.showing.seats[this.seatIndex];
    },
    addTicket() {
      this.$emit("addTicket", this.seatIndex);
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
}
.available:hover {
  background-color: rgb(115, 115, 238);
}
</style>