<template>
  <div class="grid-container">
    <div class="seat">Seat: 32 C</div>
    <div class="price">{{ this.ticketPrice }} kr</div>
    <div class="box">
      <Dropdown
        title="Choose ticket type"
        :items="types"
        @update-price="updatePrice"
      />
    </div>
  </div>
</template>

<script>
import Dropdown from "./Dropdown.vue";
export default {
  components: {
    Dropdown,
  },
  data() {
    return {
      types: [
        {
          title: "Adult",
          price: "250",
        },
        {
          title: "Child(0-12)",
          price: "150",
        },
        {
          title: "Pensioner(65+)",
          price: "170",
        },
      ],
      ticketPrice: "-",
    };
  },
  methods: {
    updatePrice(updatedPrice) {
      this.ticketPrice = updatedPrice;
    },
  },
};
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: minmax(200px, 1fr) 200px 150px;
  grid-template-rows: 30px;
  gap: 10px;
  background-color: rgb(255, 255, 255);
  text-align: center;
  border-radius: 5px;
}
.box {
  background-color: rgb(255, 255, 255);
  cursor: pointer;
  grid-column: 3;
  grid-row: 1;
  border-radius: 5px;
  border: rgb(221, 219, 217) 2px solid;
}
.seat {
  grid-column: 1;
  grid-row: 1;
  border-radius: 5px;
  padding-top: 1.5px;
}
.price {
  grid-column: 2;
  grid-row: 1;
  border-radius: 5px;
  padding-top: 1.5px;
}
.sub-menu {
  grid-column: 3;
  top: 83px;
  left: 41%;
  width: max-content;
  /* grid-row: 1; */
  /* position: absolute;
  top: calc(100% - 10px);
  left: 50%;
  transform: translateX(-50%);
  width: max-content; */
  border-radius: 5px;
}
</style>