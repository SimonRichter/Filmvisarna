<template>
  <section class="carousel" aria-label="Gallery">
    <CarouselItem :object="getObject()" />
    <button id="left" @click="nextSlide(false)">Back</button>
    <button id="right" @click="nextSlide(true)">Right</button>
  </section>
</template>

<script>
import CarouselItem from "./CarouselItem.vue";

export default {
  components: {
    CarouselItem,
  },
  data() {
    const objects = [
      {
        imageUrl:
          "https://www.themoviedb.org/t/p/original/gIR61o4awBHCNHUOrBcjyZa22BZ.jpg",
        title: "The comic book hero: Blade",
        texts: "film1",
      },
      {
        imageUrl:
          "https://www.themoviedb.org/t/p/original/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
        title: "A classic from Quentin Tarantino",
        texts: "film2",
      },
    ];
    const titles = [
      "The comic book hero: Blade",
      "A classic from Quentin Tarantino",
      "Movie of the year from Pixar",
      "A clown that doesn't make you laugh",
      "A multidimensional movie: Interstellar",
    ];
    const texts = ["film 1", "film 2", "film3", "film4", "film5"];
    const index = 0;
    this.object = [];
    // let imgSrc = images[0];
    // let title = titles[0];
    // let text = texts[0];

    return { index, objects };
  },
  methods: {
    getObject() {
      return (this.object = this.objects[this.index]);
    },
    nextSlide(option) {
      console.log("image src", this.object.imageUrl);
      if (option) {
        if (this.index >= 4) {
          this.index = 0;
        }
        this.index++;
      } else {
        this.index--;
      }
    },
  },
};
</script>

<style scoped>
#left{
  position: absolute;
  bottom: 30px;
  left: 11em;
}
#right{
  position: absolute;
  bottom: 30px;
}
</style>