<template>
  <div class="chair">
    {{ seat + 1 }}
    <div class="Taken" v-if="availableSeat == null || availableSeat == false">
      False
    </div>
    <div class="Available" v-else>True</div>
  </div>
</template>

<script>
export default {
  props: ["showing", "seat"],
  computed: {
    availableSeat() {
      return this.showing.seats[seat];
    },
  },
};
</script>

<style scoped>
.chair {
  width: fit-content;
  height: fit-content;
  border: black 1px solid;
  background-color: blue;
}
</style>