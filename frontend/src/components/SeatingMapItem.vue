<template>
  <div class="chair">
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
  border: rgb(167, 151, 151) 2px solid;
  border-radius: 5px;
  color: black;
  cursor: pointer;
  float: left;
  margin-left: 5px;
  margin-top: 5px;
}
.available{
  background-color: rgb(228, 220, 220); 
  
}
.available:hover {
  background-color: rgb(49, 172, 86);
}

</style>