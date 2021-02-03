<template>
  <div class="carousel">
    <div class="previous__item">
      <CarouselItem
        :object="objects[[index - 1 < 0 ? objects.length - 1 : index - 1]]"
        :middle="false"
      />
    </div>
    <button id="left" @click="nextSlide(false)">&#8592;</button>
    <transition
      name="fade"
      v-on:enter="enter"
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn animate__slower"
    >
      <div class="carousel__item" :key="index" @click="goToChosenMovie()">
        <CarouselItem :object="objects[index]" :middle="true" />
      </div>
    </transition>
    <button id="right" @click="nextSlide(true)">&#8594;</button>
    <div class="next__item">
      <CarouselItem
        :object="objects[[index + 1 > objects.length - 1 ? 0 : index + 1]]"
        :middle="false"
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
        texts:
          "The comic book hero,                       the slayer of vampires",
      },
      {
        imageUrl:
          "https://www.themoviedb.org/t/p/original/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
        title: "Pulp-Fiction",
        texts:
          'A Quentin Tarantino classic;       "Hamburgers: the cornerstone of any nutritious breakfast"',
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
        texts:
          "\"I'm Pennywise, the dancing clown. No we aren't strangers, are we?\"",
      },
      {
        imageUrl:
          "https://www.themoviedb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
        title: "Interstellar",
        texts: "Humanity hangs on a fragile thread. Can it be saved in time?",
      },
    ];
    let index = 0;
    let translateX = 0;
    let interval;
    return {
      objects,
      translateX,
      index,
      interval,
    };
  },
  computed: {
    enter() {
      console.log("enter the enter-method");
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
      this.$router.push("/chosen-movie/" + this.objects[this.index].title);
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
  margin: 0;
  transform: translateX(0);
  /* transition: transform 0.25s; */
}
.carousel__item:hover {
  transform: scale(1.05);
  cursor: pointer;
  filter: brightness(120%) saturate(105%);
}
.previous__item {
  display: flex;
  transform: perspective(1000px) rotateY(-45deg);
  /* transition: transform 5s; */
  filter: blur(2px);
  width: 600px;
  font-size: 5px;
}
.next__item {
  display: flex;
  transform: perspective(1000px) rotateY(45deg);
  /* transition: transform 5s; */
  filter: blur(2px);
  width: 600px;
}

.fade-enter-active,
.fade-leave-active {
  filter: blur(2px);
}

.fade-enter,
.fade-leave {
  opacity: 1;
  transition: all 5s ease;
}
#left,
#right {
  width: 40px;
  height: 40px;
  background-color: whitesmoke;
  border: none;
  position: absolute;
  opacity: 0.25;
  transition: opacity 0.5s;
  z-index: 2;
  cursor: pointer;
  border-radius: 50%;
  font-size: 20px;
  bottom: 155px;
  color: rgb(71, 71, 71);
}
#left:hover,
#right:hover {
  opacity: 0.75;
  color: black;
}
#left {
  left: 0;
}
#right {
  right: 0;
}
</style>