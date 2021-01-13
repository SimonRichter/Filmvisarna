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
      isHidden: false,
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
  position: absolute;
  background-color: teal;
  top: 80px;
  left: 16%;
  transform: translateX(-50%);
  width: max-content;
}
</style>