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
      <h3>{{ item.title }}</h3>
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
 
    },
  },
};
</script>

<style scoped>
h3 {
  padding-top: 3px;
  font-size: medium;
  margin-top: 0;
}
.sub-menu {
  position: absolute;
  background-color: #202020;
  width: 13.5vw;
  border-radius: 5px;
  margin-top: 10px;
}

@media (min-width:1800px){
  .sub-menu{
     width: 11.5vw;
  }
}
.menu-item {
  padding: 2px;
  margin: 2px;
  text-align: left;
  border-radius: 3px;
}
.menu-item:hover {
  background-color: rgb(70, 70, 70);
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
  margin-left: 5px;
  margin-bottom: 3px;
}
</style>