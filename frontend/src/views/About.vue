<template>
  <div class="contentGridContainer">

     <div class="map" style="width: 100%; overflow: hidden; height: 350px">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8988.611700266438!2d13.162159345680744!3d55.72109449828493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653bd7809088d27%3A0xf626b08182a4c26e!2zw4VrZXJncsOkbmRlbiwgMjI2IDYwIEx1bmQ!5e0!3m2!1sen!2sse!4v1612132497208!5m2!1sen!2sse"
        width="100%"
        height="700"
        frameborder="0"
        style="border: 0; margin-top: -150px"
      >
      </iframe>
    </div>
    
    <div class="map" style="width: 100%; overflow: hidden; height: 350px">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.856246965763!2d13.20947061592819!3d55.691486980537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465397d9b820d3c5%3A0x3adf01a0cddb0af0!2sVueX%20Cinema!5e0!3m2!1sen!2sse!4v1612137441735!5m2!1sen!2sse"
        width="100%"
        height="700"
        frameborder="0"
        style="border: 0; margin-top: -150px"
      ></iframe>
    </div>

   
        <div class="address">
      <h3>Theatre 1</h3>
      <h4>Kalkstensvägen 3</h4>
      <h4>224 78 Lund</h4>
    </div>

    <div class="address">
      <h3>Theatre 2</h3>
      <h4>Åkergränden 5</h4>
      <h4>226 60 Lund</h4>
    </div>
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
</template>


<script>
export default {
};
</script>

<style scoped>
.contentGridContainer {
  width: 100%;
  grid-gap: 0.1vw;
}

.about {
  padding: 0vw 10vw 0vw;
  text-align: center;
}

.pFirst {
  padding: 2vw 10vw 0vw;
 
}

.pSecond {
 
  padding: 0vw 10vw 5vw;
}

.map {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  width: 100%;
  margin-bottom: 40px;
  margin-top: -110px;
}
.address {
  text-align: center;
  margin-left: 20px;
}
p::first-letter {
  font-size: 300%;
  color: #830202;
}
</style>