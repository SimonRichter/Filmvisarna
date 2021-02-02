<template>
    <div class="image">
      <img :src="object.imageUrl" />
    </div>
    <!-- <div class="description">
      <div class="title">{{ object.title }}</div>
      <br />
      <div class="text">{{ object.text }}</div>
    </div> -->
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

</style>