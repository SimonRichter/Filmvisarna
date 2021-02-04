<template>
  <div class="contentGridContainer">
    <div class="map" style="width: 100%; overflow: hidden; height: 300px">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8989.363127085939!2d13.166832505006354!3d55.71782964332671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8f40c452cc9528c6!2sVueX%20Cinemas!5e0!3m2!1sen!2sse!4v1612352369883!5m2!1sen!2sse"
        width="100%"
        height="600"
        frameborder="0"
        style="border: 0; margin-top: -150px"
      >
      </iframe>
    </div>

    <div class="map" style="width: 100%; overflow: hidden; height: 300px">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.856246965763!2d13.20947061592819!3d55.691486980537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465397d9b820d3c5%3A0x3adf01a0cddb0af0!2sVueX%20Cinema!5e0!3m2!1sen!2sse!4v1612137441735!5m2!1sen!2sse"
        width="100%"
        height="600"
        frameborder="0"
        style="border: 0; margin-top: -150px"
      ></iframe>
    </div>

    <div class="address2">
      <h3>Theatre 1</h3>
    </div>

    <div class="address2">
      <h3>Theatre 2</h3>
    </div>
    <p class="about ">
      THEATRE 1 is located north of the city. It was built in the old school
      area. This facilty has <span >4 salons</span>, 2 big ones with capacity
       <span>100 seats </span> and 2
      small ones with 50 seats. True dolby digital audio in all viewing rooms
    </p>
    <p class="about ">
      THEATRE 2 is located south east of the city. It was built in the TH school
      after they stopped working. This facilty has <span >4 salons</span>, 2 big
      ones with capacity <span>100 seats </span>and 2 small ones with 50 seats. True dolby digital
      audio in all viewing rooms
    </p>

    <div class="address">
      <span>Address</span>

      <h4>Kalkstensvägen 3</h4>
      <h4>224 78 Lund</h4>
          <h4>046-23423423</h4>
    </div>
    <div  class="address">
      <span>Address</span>
      <h4>Åkergränden 5</h4>
      <h4>226 60 Lund</h4>
          <h4>046-3456433</h4>
    </div>

    <div class="personal">
      <br /><br /><br /><br />
      <h2>Our staff</h2>
      <h3>Rebecca / Movies Manager<span> - rebecca@vuexcinemas.com</span></h3>
      <h3>Simon / Posters Manager<span> - simon@vuexcinemas.com</span></h3>
      <h3>Jacob / Seats Manager<span> - jacob@vuexcinemas.com</span></h3>
      <h3>Hugo / PopCorn Manager<span> -hugo@vuexcinemas.com</span></h3>
      <h3>Mauro / Toilet Manager<span> - mauro@vuexcinemas.com</span></h3>
      <h3>Johanna/ CSS Master and Manager of Mangers<span> - johanna@vuexcinemas.com</span></h3>
    </div>
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
.address{
  text-align: center;
  padding-top: 3vw;
}
.personal {
  text-align: center;
  grid-column: 1/3;
}
.personal h2{
color: rgb(117, 6, 6);
}
.contentGridContainer {
  width: 100%;
  grid-gap: 0.1vw;
}

.about {
  padding: 0vw 10vw 0vw;
  text-align: center;
}

.map {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  width: 100%;
  margin-bottom: 40px;
  margin-top: -25px;
}
.address2 {
  text-align: center;
}
p::first-letter {
  font-size: 300%;
  color: #830202;
}

.about span{
  color: #830202;

}
</style>