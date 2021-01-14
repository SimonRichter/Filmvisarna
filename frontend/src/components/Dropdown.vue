<template>
  <div id="menu-item">
    <!-- <a v-on:click="isHidden = !isHidden"> -->
    <a v-on:click="isHidden = !isHidden">
      {{ title }}
    </a>
  </div>
  <svg viewBox="0 0 1030 638" width="10"></svg>
  <div v-if="!isHidden" class="sub-menu">
    <div
      v-for="(item, i) in items"
      :key="i"
      v-on:click="showPrices($event, item)"
      class="menu-item"
    >
      <a>{{ item.title }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "dropdown",
  props: ["title", "items"],
  data() {
    return {
      isHidden: true,
    };
  },
  methods: {
    showPrices(ev, item) {
      console.log("The price for this item is", item.price);
    },
  },
};
</script>

<style scoped>
.sub-menu {
  /* grid-template-columns: 1;
  grid-template-rows: 3; */
  border: rgb(221, 219, 217) 1px solid;
  position: absolute;
  background-color: rgb(255, 255, 255);
  top: 80px;
  left: 16%;
  transform: translateX(-50%);
  width: max-content;
  border-radius: 5px;
}
.menu-item {
  /* grid-column: 1;
  grid-row: 1 / 3; */
  border: rgb(221, 219, 217) 1px solid;
  padding: 2px;
  margin: 2px;
  text-align: left;
  border-radius: 3px;
}
.menu-item:hover {
  /* grid-column: 1;
  grid-row: 1 / 3; */
  background-color: rgb(221, 219, 217);
}
</style>