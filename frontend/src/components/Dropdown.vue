<template>
  <div v-on:click="isHidden = !isHidden" id="menu-item">
    <!-- <a v-on:click="isHidden = !isHidden"> -->
    <h3>{{ title }} <i class="arrow down"></i></h3>
  </div>
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
h3 {
  padding-top: 5px;
  color: black;
  font-size: medium;
}
.sub-menu {
  border: #dc0428 1px solid;
  position: absolute;
  background-color: black;
  width: 131px;
  border-radius: 5px;
  margin-top: 10px;
}
.menu-item {
  font-size: 18px;
  font-family: "Bebas Neue", cursive;
  padding: 2px;
  margin: 2px;
  text-align: left;
  border-radius: 3px;
}
.menu-item:hover {
  background-color: rgb(46, 46, 46);
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