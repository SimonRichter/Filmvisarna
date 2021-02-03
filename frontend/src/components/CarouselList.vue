<template>
  <div class="carousel">
    <div class="previous__item">
      <CarouselItem
        :object="objects[[index - 1 < 0 ? objects.length - 1 : index - 1]]"
      />
    </div>
    <button id="left" @click="nextSlide(false)"></button>
    <transition name="fade" v-on:enter="enter">
      <div class="carousel__item" :key="index" @click="goToChosenMovie()">
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
        title: "Blade",
        texts: "The comic book hero: Blade",
      },
      {
        imageUrl:
          "https://www.themoviedb.org/t/p/original/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
        title: "Pulp-Fiction",
        texts: "A classic from Quentin Tarantino",
      },
      {
        imageUrl:
          "https://www.themoviedb.org/t/p/original/4HcgqYARkfkkdP4zUcfOXN7yNmv.jpg",
        title: "Soul",
        texts: "Movie of the year from Pixar",
      },
      {
        imageUrl:
          "https://www.themoviedb.org/t/p/original/rAQcPrEaPzDRVNX7XX5TWyxCGFN.jpg",
        title: "It",
        texts: "A clown that doesn't make you laugh",
      },
      {
        imageUrl:
          "https://www.themoviedb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
        title: "Interstellar",
        texts: "A multidimensional movie: Interstellar",
      },
    ];
    let index = 0;
    let translateX = 0;
    let object = [];
    let interval;
    let description = "";
    return {
      objects,
      object,
      translateX,
      index,
      interval,
      description,
    };
  },
  computed: {
    enter() {
      this.object = this.objects[this.index];
      console.log("enter the enter-method");

      this.interval = setInterval(() => {
        console.log("Im changing index", this.index);

        if (this.index >= this.objects.length - 1) {
          this.index = 0;
        } else {
          this.index++;
        }
      }, 5000);
    },
  },
  methods: {
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
    goToChosenMovie() {
      this.$router.push("/chosen-movie/" + this.object.title);
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
  z-index: 1;
  width: 1500px;
  height: 350px;
  margin: 10px;
  transform: translateX(0);
  transition: transform 0.25s;
}
.carousel__item:hover {
  transform: scale(1.05);
  cursor: pointer;
}
.previous__item {
  display: flex;
  transform: perspective(800px) rotateY(-45deg);
  transition: transform 0.25s;
  filter: blur(2px);
  width: 600px;
  height: 200px;
}
.next__item {
  display: flex;
  transform: perspective(800px) rotateY(45deg);
  transition: transform 0.25s;
  filter: blur(2px);
  width: 600px;
  height: 200px;
}
.fade-enter-active,
.fade-leave-active {
  filter: blur(2px);
}

.fade-enter,
.fade-leave {
  opacity: 1;
}
.desc {
  width: 100px;
  height: 100px;
  color: black;
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