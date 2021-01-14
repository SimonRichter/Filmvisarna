<template>
  <div class="grid-container">
    <div class="seat">32 C</div>
    <div class="box">
      <Dropdown title="Choose ticket type" :items="types" />
    </div>
  </div>
</template>

<script>
import Dropdown from "./Dropdown.vue";
export default {
  components: {
    Dropdown,
  },
  data() {
    return {
      types: [
        {
          title: "Adult",
          price: "250",
        },
        {
          title: "Child(0-12)",
          price: "150",
        },
        {
          title: "Pensioner(65+)",
          price: "170",
        },
      ],
    };
  },
};
</script>

<style>
.grid-container {
  grid-template-columns: 4;
  grid-template-rows: 1;
  background-color: thistle;
  border: black 1px solid;
}
.box {
  background-color: cornflowerblue;
  cursor: pointer;
  grid-column: 3;
  grid-row: 1;
}
.seat {
  background-color: tomato;
  grid-column: 1;
  grid-row: 1;
}
.sub-menu {
  position: absolute;
  top: calc(100% - 10px);
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
}
</style>