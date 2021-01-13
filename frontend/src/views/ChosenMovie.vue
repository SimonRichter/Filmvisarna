<template>
  <div class="contentGridContainer">
    <!-- Put all content here in grid container -->
    
  </div>
  <router-link to="/"><li>Movies</li></router-link>
  <button v-on:click="goBack">Return</button>
</template>

<script>
export default {
  methods: {
    goBack: function(){  
      <router-link to="/"></router-link>
    }
  }
}
</script>

<style>

</style>