<template>
  <div v-on:click="isHidden = !isHidden" id="menu-item">
    <!-- <a v-on:click="isHidden = !isHidden"> -->
    <h3>{{ title }} <i class="arrow down"></i></h3>
    
  </div>
  <svg viewBox="0 0 1030 638" width="10"></svg>
  <div v-if="!isHidden" class="sub-menu">
    <div
      v-for="(item, i) in items"
      :key="i"
      @click="showPrices(item)"
      class="menu-item"
    >
      <a>{{ item.title }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "dropdown",
  emits: ["update-price"],
  props: ["title", "items"],
  data() {
    return {
      isHidden: true,
    };
  },
  methods: {
    showPrices(item) {
      this.isHidden = true;
      this.$emit("update-price", item.title, item.price);
      console.log("The price for this item is", item.price);
    },
  },
};
</script>

<style scoped>
.sub-menu {
  border: rgb(221, 219, 217) 1px solid;
  position: absolute;
  background-color: rgb(142, 167, 158);
  width: 165px;
  /* top: 80px;
  left: 16%;
  transform: translateX(-50%);
  width: max-content; */
  border-radius: 5px;
}
.menu-item {
  border: rgb(221, 219, 217) 1px solid;
  padding: 2px;
  margin: 2px;
  text-align: left;
  border-radius: 3px;
}
.menu-item:hover {
  background-color: rgb(179, 192, 187);
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  /* margin-right: 5px; */
  margin-left: 5px;
  margin-bottom: 3px;
}
</style>