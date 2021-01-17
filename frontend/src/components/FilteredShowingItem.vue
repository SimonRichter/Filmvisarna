<template>
  <div class="showingItem" v-for="showing of showings" :key="showing.id">
    <div class="temp">{{showing.date}} - {{showing.time}} Title: {{showing.title}}  Seats available: {{showing.seats}}  <button class="bookButton" v-on:click="bookingmethod">Book</button> </div>
  </div>
  
</template>

<script>
export default {
  computed: {
    title() {
      // get showing id from url parameter
      return this.$route.params.title.replace('-', '');
    },
     showings() {
      return this.$store.state.showings.filter((obj) => obj.title == this.title);
    },
  }

}
</script>

<style>

</style>