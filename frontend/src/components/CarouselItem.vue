<template>
  <div class="image">
    <img :src="object.imageUrl" />
  </div>
  <div class="description">
    <div class="title">
      <h1>{{ object.texts }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ["object"],
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
.description {
  position: absolute;
  text-align: center;
  padding: 30px;
  bottom: -5px;
  left: 0;
}
</style>