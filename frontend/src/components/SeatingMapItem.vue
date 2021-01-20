<template>
  <div class="chair">
    {{ seatIndex }}
    <div
      class="available"
      @click="setContent"
      v-if="availableSeat == null || availableSeat == false"
    >{{ content }}
    </div>
    <div class="taken" v-else>Taken</div>
  </div>
</template>

<script>
export default {
  // emits: ["changeTicket"],
  props: ["showing", "seatIndex"],
  data(){
    return{
      content: "Available",
      clicked: false
    }
  },
  computed: {
    availableSeat() {
      return this.showing.seats[this.seatIndex];
    },
    // content() {
    //   return this.clicked == true ? "Reserved" : "Available";
    // },
    // changeTicket() {
    //   this.content = this.clicked == false ? "Available" : "Reserved";
    //   if (this.clicked == true) {
    //     console.log('I have clicked in map item');
    //     this.$emit("changeTicket", this.seatIndex);
    //   } else {
    //     this.$emit("changeTicket", null);
    //   }
    // },
  },
  methods: {
    setContent(){
      this.clicked = !this.clicked;
      this.content = this.clicked == true ? "Reserved" : "Available";
    }
  }
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