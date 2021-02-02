<template>
  <div class="contentGridContainer">
    <p class="about pFirst">
      Xorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quia.
      Tempore deleniti in deserunt consequuntur excepturi. Sed nobis soluta
      facilis fugiat. Consequatur, est exercitationem. Labore nobis repellendus
      ipsum impedit amet? Lorem ipsum dolor sit amet, consectetur adipisicing
      elit. Unde, ducimus maxime. Molestiae reiciendis repellendus rem
      exercitationem dignissimos, reprehenderit qui pariatur, facilis a
      molestias tenetur est laboriosam ar chitecto id impedit deserunt? Lorem
      ipsum dolor sit, amet consectetur adipisicing elit. Vel fuga cum minima
      tempora iusto ad reprehenderit numquam nulla doloribus aspernatur,
      delectus voluptatum! Dolor, est nam. Accusantium, iusto! Eius, voluptatem
      fugiat? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
      a, delectus illum saepe cum sit magnam doloribus dignissimos deleniti,
      quae sequi vitae quaerat repudiandae rem iste provident voluptate minima
      ea.
    </p>
    <p class="about pSecond">
      Corem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quia.
      Tempore deleniti in deserunt consequuntur excepturi. Sed nobis soluta
      facilis fugiat. Consequatur, est exercitationem. Labore nobis repellendus
      ipsum impedit amet? Lorem ipsum dolor sit amet, consectetur adipisicing
      elit. Unde, ducimus maxime. Molestiae reiciendis repellendus rem
      exercitationem dignissimos, reprehenderit qui pariatur, facilis a
      molestias tenetur est laboriosam ar chitecto id impedit deserunt? Lorem
      ipsum dolor sit, amet consectetur adipisicing elit. Vel fuga cum minima
      tempora iusto ad reprehenderit numquam nulla doloribus aspernatur,
      delectus voluptatum! Dolor, est nam. Accusantium, iusto! Eius, voluptatem
      fugiat? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
      a, delectus illum saepe cum sit magnam doloribus dignissimos deleniti,
      quae sequi vitae quaerat repudiandae rem iste provident voluptate minima
      ea.
    </p>
    
  </div>
  <Footer />
</template>


<script>
import Footer from "../components/Footer.vue"
export default {
  components:{
    Footer

  }
};
</script>

<style scoped>

.contentGridContainer{
   grid-gap:2vw;
}

.about {
  padding: 0vw 10vw 0vw;
  text-align: center;
}

.pFirst {
   padding: 2vw 10vw 0vw;
  grid-area: 1/1/2/3;
}

.pSecond{
   grid-area: 2/1/3/3;
   padding: 0vw 10vw 5vw;
}

.map {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  width: 100%;
  height: 300px;
  margin-bottom: 40px;
}

p::first-letter {
  font-size: 300%;
  color: #830202;
}
</style>