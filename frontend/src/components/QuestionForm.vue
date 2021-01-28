<template>
  <div class="grid-container-questionForm">
    <input
      class="firstName"
      type="text"
      v-model="firstName"
      placeholder="First name"
      v-on:keypress="isLetter"
    />
    <input
      class="lastName"
      type="text"
      v-model="lastName"
      placeholder="Last name"
      v-on:keypress="isLetter"
    />
    <input
      class="email"
      type="text"
      v-model="email"
      placeholder="Email"
      v-on:keypress="isEmail"
    />
    <textarea
      class="message"
      v-model="message"
      placeholder="Write your message here"
      v-on:keypress="checkMessage"
    />
    <button>Submit</button>
  </div>
</template>

<script>
export default {
  computed: {
    isLetter() {},
    isEmail() {},
    checkMessage() {},
  },
};
</script>

<style scoped>
.grid-container-questionForm {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 30px 30px 200px 30px;
  gap: 10px;
  margin-bottom: 50px;
}
.firstName {
  grid-area: 1 / 1 / 2 / auto;
}
.lastName {
  grid-area: 1 / 2 / 2 / auto;
}
.email {
  grid-area: 2 / 1 / 3 / 3;
}
.message {
  grid-area: 3 / 1 / 4 / 3;
}
button {
  grid-area: 4 / 1 / 5 / 3;
  width: 100px;
  margin-left: calc(50% - 50px);
}
</style>