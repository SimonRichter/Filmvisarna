<template>
  <div class="carousel-item">
    <div class="image">
      <img :src="object.imageUrl" />
    </div>
    <div class="description">
      <div class="title">{{ object.title }}</div>
      <br />
      <div class="text">{{ object.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["object"],
};
</script>

<style scoped>
.carousel-item {
  grid-area: 1/1/2/3;
  max-height: 500px;
  margin-bottom: 100px;
  display: inline-block;
}
.image {
  width: 100%;
  height: 70%;
  overflow: hidden;
}
img {
  width: 100%;
  height: 100%;
}
.title {
  font-size: xx-large;
  font-family: "Bebas Neue", cursive;
  color: black;
}
.description {
  position: absolute;
  bottom: 50px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.26);
}
</style>