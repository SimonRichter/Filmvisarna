<template>
  <div id="modal" v-if="popModal">
    <div class="modal-content">
      <h5>
        Are you sure you want to cancel your reservation for<br />
        {{ seats.length }} ticket{{ seats.includes(",") ? "s" : "" }} to
        {{ movieTitle }}, {{ time }} - {{ date }}?
        <br />
        <button id="cancel" @click="$emit('modalOption', false)">Cancel</button>
        <button id="confirm" @click="$emit('modalOption', true)">YES</button>
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["modalOption"],
  props: ["showModal", "movieTitle", "seats", "date", "time"],
  watch: {
    showModal: {
      handler(newVal) {
        this.popModal = newVal;
      },
    },
  },
  data() {
    return {
      popModal: false,
    };
  },
};
</script>

<style scoped>
h5 {
  font-size: large;
}
#modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(139, 138, 138, 0.452);
}
.modal-content {
  background-color: rgb(233, 225, 211);
  margin: 15% auto;
  padding: 20px;
  border: 1px solid black;
  width: 40%;
  text-align: center;
  border-radius: 10px;
}
button {
  margin: 10px;
  margin-top: 20px;
  width: 60px;
  height: 30px;
  border: 2px solid #6e1020;
  border-radius: 5px;
  cursor: pointer;
}
#confirm:hover {
  background-color: rgb(214, 206, 193);
  transform: scale(1.05);
}
#cancel:hover {
  background-color: #751321;
  transform: scale(1.05);
}
#confirm {
  background-color: transparent;
  color: rgb(94, 91, 87);
}
#cancel {
  background-color: #6e1020;
  color: wheat;
}
</style>