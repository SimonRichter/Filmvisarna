<template>
  <div class="image">
    <img :src="object.imageUrl" />
  </div>
  <div class="description" v-if="middle">
    <div class="title">{{ object.title }}</div>
    <div class="text">{{ object.texts.substring(0, 35) }} <br /> {{ object.texts.substring(35, 1000) }}</div>
</template>

<script>
export default {
  props: ["object", "middle"],
};
</script>

<style scoped>
img {
  width: 100%;
  height: auto;
  border-radius: 20px;
}
.text {
  position: absolute;
  text-align: left;
  padding: 30px;
  bottom: 5px;
  left: 0;
  font-family: "Alfa Slab One", cursive;
  color: rgb(231, 227, 227);
  font-size: 25px;
  filter: brightness(5px);
  border-radius: 20%;
  text-shadow: rgb(32, 75, 32) 2px 2px;
}
p {
  font-size: 30px;
}
.title {
  position: absolute;
  text-align: left;
  padding: 7px;
  bottom: 280px;
  left: 0;
  background: rgba(255, 255, 255, 0.61);
  color: black;
  font-family: "Oswald", sans-serif;
  border-radius: 10px;
  margin: 17px;
}
</style>