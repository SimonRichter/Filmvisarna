<template>
  <div class="contentGridContainer">
      <div v-for="movie of showings"
    :key="movie.id"
    >
      <template v-if="true">
        {{movie.date}} - {{movie.time}} Title: {{movie.title}}  Seats available: {{movie.seats}}
      </template>

    </div>
    <!-- Put a ll content here in grid container -->
  </div>
</template>

<script>
export default {

  computed:{
    showings(){
      return this.$store.state.showings
    }
  }

}
</script>

<style>

</style>