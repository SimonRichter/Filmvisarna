<template>
  <div class="carousel">
    <div class="previous__item">
      <CarouselItem
        :object="objects[[index - 1 < 0 ? objects.length - 1 : index - 1]]"
      />
    </div>
    <button id="left" @click="nextSlide(false)"></button>
    <transition name="fade" v-on:enter="enter">
      <div class="carousel__item">
        <CarouselItem :object="objects[index]" />
      </div>
    </transition>
    <button id="right" @click="nextSlide(true)"></button>
    <div class="next__item">
      <CarouselItem
        :object="objects[[index + 1 > objects.length - 1 ? 0 : index + 1]]"
      />
    </div>
  </div>
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
      {
        imageUrl:
          "https://www.themoviedb.org/t/p/original/4HcgqYARkfkkdP4zUcfOXN7yNmv.jpg",
        title: "Movie of the year from Pixar",
        texts: "film3",
      },
      {
        imageUrl:
          "https://www.themoviedb.org/t/p/original/rAQcPrEaPzDRVNX7XX5TWyxCGFN.jpg",
        title: "A clown that doesn't make you laugh",
        texts: "film4",
      },
      {
        imageUrl:
          "https://www.themoviedb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
        title: "A multidimensional movie: Interstellar",
        texts: "film5",
      },
    ];
    let index = 0;
    let translateX = 0;
    this.object = [];

    return { objects, translateX, index };
  },
  computed: {
    enter() {
      setInterval(() => {
        if (this.index >= this.objects.length - 1) {
          this.index = 0;
        } else {
          this.index++;
        }
      }, 5000);
    },
  },
  methods: {
    getObject() {
      return (this.object = this.objects[this.index]);
    },
    nextSlide(option) {
      console.log("length of objects", this.objects.length);
      if (!option) {
        if (this.index != 0) {
          this.index--;
        } else {
          this.index = this.objects.length - 1;
        }
        this.translateX += 300;
      } else {
        if (this.index != this.objects.length - 1) {
          this.index++;
        } else {
          this.index = 0;
        }
        this.translateX -= 300;
      }
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.carousel {
  align-items: center;
  display: flex;
  margin: 2rem auto;
  position: relative;
  width: 100%;
}
.carousel__item {
  display: flex;
  transform: translateX(0);
  transition: transform 0.25s;
  z-index: 1;
  width: 1800px;
  height: 400px;
  margin: 10px;
  animation: fadeIn;
  animation-duration: 2s;
}
.previous__item {
  display: flex;
  transform: translateX(150);
  transition: transform 0.25s;
  transform: perspective(800px) rotateY(-25deg);
  filter: blur(2px);
  width: 600px;
  height: 200px;
}
.next__item {
  display: flex;
  transform: translateX(-150);
  transition: transform 0.25s;
  transform: perspective(800px) rotateY(25deg);
  filter: blur(2px);
  width: 600px;
  height: 200px;
}
.fade-enter-active,
.fade-leave-active {
  transition: scale(0.5) 1s;
}

#left,
#right {
  width: 50px;
  height: 50px;
  background-color: whitesmoke;
  position: absolute;
  opacity: 0.25;
  transition: opacity 0.25s;
  z-index: 2;
  cursor: pointer;
  border-radius: 50%;
  font-size: 50px;
}
#left:hover,
#right:hover {
  opacity: 1;
}
#left {
  left: 10px;
}
#right {
  right: 10px;
}
</style>