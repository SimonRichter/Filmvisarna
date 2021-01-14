<template>
  <div class="grid-container-item">
    <div class="seat">Ticket {{ count }}</div>
    <div class="price">Price: {{ this.ticketPrice }} kr</div>
    <div class="box">
      <Dropdown
        :title="this.placeHolder"
        :items="types"
        @update-price="updatePrice"
      />
    </div>
  </div>
</template>

<script>
import Dropdown from "./Dropdown.vue";
export default {
  props: ["count"],
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
          title: "Senior(65+)",
          price: "170",
        },
      ],
      ticketPrice: "-",
      placeHolder: "Choose ticket type",
    };
  },
  methods: {
    updatePrice(updatedPrice, typeTitle) {
      this.ticketPrice = updatedPrice;
      this.placeHolder = typeTitle;
    },
  },
};
</script>

<style>
.grid-container-item {
  display: grid;
  grid-template-columns: 200px minmax(100px, 1fr) 170px;
  grid-template-rows: 30px;
  background-color: rgb(142, 167, 158);
  text-align: center;
  border-radius: 5px;
  border: black 2px solid;
}
.box {
  background-color: rgb(179, 192, 187);
  cursor: pointer;
  grid-column: 3;
  grid-row: 1;
  border-radius: 5px;
  border: rgb(221, 219, 217) 2px solid;
  margin: 1px;
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
  top: 86px;
  left: 38.4%;
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