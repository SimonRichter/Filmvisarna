<template>
   <p class="about">
      L orem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quia.
      Tempore deleniti in deserunt consequuntur excepturi. Sed nobis soluta
      facilis fugiat. Consequatur, est exercitationem. Labore nobis repellendus
      ipsum impedit amet? Lorem ipsum dolor sit amet, consectetur adipisicing
      elit. Unde, ducimus maxime. Molestiae reiciendis repellendus rem
      exercitationem dignissimos, reprehenderit qui pariatur, facilis a
      molestias tenetur est laboriosam architecto id impedit deserunt? Lorem
      ipsum dolor sit, amet consectetur adipisicing elit. Vel fuga cum minima
      tempora iusto ad reprehenderit numquam nulla doloribus aspernatur,
      delectus voluptatum! Dolor, est nam. Accusantium, iusto! Eius, voluptatem
      fugiat? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
      a, delectus illum saepe cum sit magnam doloribus dignissimos deleniti,
      quae sequi vitae quaerat repudiandae rem iste provident voluptate minima
      ea.
   </p>
   <div class="address">
      <h3>Theatre 1</h3>
      <h4>Kalkstensvägen 3</h4>
      <h4>224 78 Lund</h4>
   </div>

   <iframe
      class="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.849261299484!2d13.212237046803427!3d55.69160842824738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQxJzMwLjkiTiAxM8KwMTInNDUuMiJF!5e0!3m2!1sen!2sse!4v1610916275730!5m2!1sen!2sse"
      frameborder="0"
      style="border: 0"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
   ></iframe>

   <div class="address">
      <h3>Theatre 2</h3>
      <h4>Åkergränden 5</h4>
      <h4>226 60 Lund</h4>
   </div>
   <iframe
      class="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1336.2078546115629!2d13.16775562820989!3d55.719845537707805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQzJzExLjUiTiAxM8KwMTAnMDcuMiJF!5e0!3m2!1ssv!2sse!4v1610917888287!5m2!1ssv!2sse"
      frameborder="0"
      style="border: 0"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
   ></iframe>
</template>


<script>
export default {};
</script>

<style scoped>
.about {
   margin: 10vh;
   font-family: Arial, Helvetica, sans-serif;
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
.address {
   margin-left: 20px;
}
p::first-letter {
   font-size: 200%;
   color: #830202;
}
</style>