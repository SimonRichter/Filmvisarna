<template>
  <div class="contentGridContainer">
    <h2>About</h2>
    <p class="about">
      Cinemas VueX, with its 2 amazing comfortable theatres, has the capacity
      for 600 people simultaneously. Impeccable quality of image and sound, but
      the most important is the quality of the staff and the values of the
      company for always improving and also for always giving the best service
      to its customers
    </p>
    <br /><br /><br />
    <h2>history</h2>
    <p class="about">
      VueX Cinemas started as a funny thought during a party in 2015. “What if
      we had our own cinema”, said Johanna(CSS Master and Manager of Managers).
      Everyone laughed but the thought lingered for a while and it sparked a
      collective planning and entrepreneurship. Within a year the design of the
      building, the contract with the film studios and the leasing for the
      pop-corn machines was done.
    </p>
    <p class="about">
      Soon all the plans were in motion and accelerated when Hugo, the future
      Pop-Corn manager, decided to invest one million euros in sound and video
      equipment. By the end of 2016 The first VueX Cinema was open. It was a
      huge success, which led to very fast acquisition of a new location for the
      second VueX theatre. This one was built even faster, opening its doors at
      the beginning of 2018. Right now , there is a pause in the business
      because of the current pandemic, however the planning for a third theatre
      is happening behind the curtain. A new theatre will allow VueX to showcase
      even more than 14 films! Stay toon :)
    </p>
  </div>
  <div class="sinContainer">
    <img class="signa" src="../pictures/Signatures/s.png" alt="rbddde" />
    <img class="signa" src="../pictures/Signatures/j.png" alt="rbddde" />
    <img class="signa" src="../pictures/Signatures/r.png" alt="rbddde" />
    <img class="signa" src="../pictures/Signatures/h.png" alt="rbddde" />
    <img class="signa" src="../pictures/Signatures/jo.png" alt="rbddde" />
    <img class="signa" src="../pictures/Signatures/m.png" alt="rbddde" />
  </div>
</template>


<script>
export default {};
</script>

<style scoped>
.sinContainer {
  text-align: center;
  width: 100vw;
}
h2 {
  grid-column: 1/3;
  text-align: center;
}
.signa {
  width: 10vw;
  transform: rotate(-20deg);
  padding: 0px 10px 0px 10px;
}
.contentGridContainer {
  width: 80%;
  grid-gap: 0.1vw;
}

.about {
  padding: 0vw 10vw 0vw;
  text-align: center;
  grid-column: 1/3;
  font-size: 18px;
}

p::first-letter {
  font-size: 300%;
  color: #800505;
}
</style>