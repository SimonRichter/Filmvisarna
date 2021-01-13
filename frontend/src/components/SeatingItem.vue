<template>
  <div class="box">
    <Dropdown title="Choose ticket type" :items="types" />
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
.box {
  width: 100px;
  height: 50px;
  background-color: cornflowerblue;
}
.sub-menu {
  position: absolute;
  background-color: cornsilk;
  top: calc(100% - 10px);
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
}
</style>