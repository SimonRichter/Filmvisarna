<template>
  <div class="filteredItem">
    <span>{{ time }}</span
    ><span>{{ date }}</span>
    <h3>{{ title }}</h3>
    <h3>{{ seats }}</h3>
    <!-- <button class="bookButton" v-on:click="bookingmethod">Book</button> -->
  </div>
  <!-- <div class="showingItem" v-for="showing of showings" :key="showing.id">
      <div class="temp">{{showing.date}} - {{showing.time}} Title: {{showing.title}}  Seats available: {{showing.seats}}  <button class="bookButton" v-on:click="bookingmethod">Book</button> </div>
    </div> -->
</template>

<script>
export default {
  props: ["title", "date", "time", "seats", "bookBtn"]
};
</script>

<style scoped>
.filteredItem{
  color: white;
}

</style>