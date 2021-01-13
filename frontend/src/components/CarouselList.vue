<template>
<link
    rel="stylesheet"
    href="node_modules/@splidejs/splide/dist/css/splide.min.css"
  />
  <div class="splide">
    <div class="splide__track">
      <ul class="splide__list">
        <li class="splide__slide">Slide 01</li>
        <li class="splide__slide">Slide 02</li>
        <li class="splide__slide">Slide 03</li>
      </ul>
    </div>
  </div>
</template>

<script>

new Splide(".splide").mount();

export default {

  
  
}
</script>

<style>

</style>