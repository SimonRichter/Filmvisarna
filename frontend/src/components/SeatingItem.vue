<template>
  <div class="grid-container-item">
    <h3 class="seat">Ticket {{ count }}</h3>
    <h3 class="price">Price: {{ ticketPrice }} kr</h3>
    <div class="box">
      <Dropdown
        :title="placeHolder"
        :items="types"
        @update-price="updatePrice"
      />
    </div>
  </div>
</template>

<script>
import Dropdown from "./Dropdown.vue";
export default {
  emits: ["update-total"],
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
          title: "Child (0-12)",
          price: "150",
        },
        {
          title: "Senior (65+)",
          price: "170",
        },
      ],
      ticketPrice: "-",
      placeHolder: "Choose ticket type",
    };
  },
  methods: {
    updatePrice(title, price) {
      this.ticketPrice = price;
      this.placeHolder = title;
      this.$emit("update-total", title, price, this.count);
    },
  },
};
</script>

<style scoped>
h3 {
  color: black;
}
.grid-container-item {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 30px;
  background-color: #6e1020;
  text-align: center;
  padding-left: 10px;
  margin-top: 10px;
  border-radius: 5px;
}
.box {
  background-color: rgb(116, 109, 98);
  cursor: pointer;
  grid-column: 3;
  grid-row: 1;
  border-radius: 5px;
  border: rgb(116, 109, 98);
}
.seat {
  grid-column: 1;
  grid-row: 1;
  border-radius: 5px;
  text-align: left;
  padding-top: 2px;
}
.price {
  grid-column: 2;
  grid-row: 1;
  border-radius: 5px;
  text-align: left;
  padding-top: 2px;
}
.sub-menu {
  grid-column: 3;
  top: 86px;
  left: 38.4%;
  width: max-content;
  border-radius: 5px;
}
</style>