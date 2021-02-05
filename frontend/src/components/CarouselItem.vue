<template>
  <div class="image">
    <img :src="object.imageUrl" />
    <div class="description" v-if="middle">
      <div class="text">
        {{ object.texts.substring(0, 35) }} <br />
        {{ object.texts.substring(35, 1000) }}
      </div>
    </div>
  </div>
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

.description {
  padding: 30px;
 
  /*   left: 0; */
  font-family: "Alfa Slab One", cursive;
  color: rgb(231, 227, 227);
  font-size: 1.4vw;
  filter: brightness(5px);
  border-radius: 20%;
  text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
  margin-top: -7vw;

}
</style>