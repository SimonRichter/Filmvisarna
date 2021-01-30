<template>
  <form id="questions-form" @submit.prevent="processForm">
    <input
      class="firstName"
      type="text"
      name="firstName"
      v-model="firstName"
      placeholder="First name"
      @keyup="reset()"
    />
    <input
      class="lastName"
      type="text"
      name="lastName"
      v-model="lastName"
      placeholder="Last name"
      @keyup="reset()"
    />
    <input
      class="email"
      type="text"
      name="email"
      v-model="email"
      placeholder="Email"
      @keyup="reset()"
    />
    <textarea
      class="message"
      name="message"
      v-model="message"
      @keyup="
        charCount();
        reset();
      "
      :maxlength="totalChar"
      placeholder="Write your message here"
    /><span class="counter">{{ remainingChar }} / {{ totalChar }}</span>
    <button type="submit" @submit="submit">Submit</button>
    <span class="error" v-if="error != ''">{{ error }}</span>
    <span class="sent" v-if="submitOk"
      >Thank you for your message!<br />
      We'll try to respond within 48 hrs.</span
    >
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      remainingChar: 0,
      totalChar: 250,
      error: "",
      submitOk: false,
    };
  },
  methods: {
    processForm: function () {
      const nameOK = this.checkName();
      const emailOK = this.checkEmail();
      const messageOK = this.checkMessage();
      if (nameOK == false) {
        this.error = "Invalid name";
      } else if (emailOK == false) {
        this.error = "Invalid email";
      } else if (messageOK == false) {
        this.error = "Invalid characters in message";
      } else {
        this.error = "";
        let message = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          message: this.message,
        };
        this.$store.dispatch("addNewMessage", message);
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.message = "";
        this.submitOk = true;
        console.log("Everythings good, processing form!");
      }
    },
    checkName() {
      let validLetters = /^[A-Za-z]+$/;
      if (
        this.firstName.match(validLetters) &&
        this.lastName.match(validLetters)
      ) {
        return true;
      } else {
        return false;
      }
    },
    checkEmail() {
      let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-]+$/;
      if (this.email.match(validEmail)) {
        return true;
      } else {
        return false;
      }
    },
    checkMessage() {
      let validCharacters = /^[a-zA-Z0-9.!%&'+/=?-`]+$/;
      console.log("this.message", this.message);
      let trimmedMessage = this.message.replaceAll(/\s/g, "");
      console.log("trimmed message", trimmedMessage);
      if (trimmedMessage.match(validCharacters)) {
        return true;
      } else {
        return false;
      }
    },
    charCount() {
      this.remainingChar = this.message.length;
    },
    reset() {
      this.submitOk = false;
      this.error = "";
    },
  },
};
</script>

<style scoped>
#questions-form {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 30px 30px 170px 30px 30px;
  gap: 15px;
  margin: auto;
  width: 70%;
  margin-bottom: 50px;
}
.firstName {
  grid-area: 1 / 1 / 2 / auto;
  padding: 15px;
  border: 0;
  border-radius: 5px;
  font-size: inherit;
  font-family: "Oswald", sans-serif;
  font-weight: bold;
  background-color: rgb(238, 220, 192);
}
.lastName {
  grid-area: 1 / 2 / 2 / auto;
  padding: 15px;
  border: 0;
  border-radius: 5px;
  font-size: inherit;
  font-family: "Oswald", sans-serif;
  font-weight: bold;
  background-color: rgb(238, 220, 192);
}
.email {
  grid-area: 2 / 1 / 3 / 3;
  padding: 15px;
  border: 0;
  border-radius: 5px;
  font-size: inherit;
  font-family: "Oswald", sans-serif;
  font-weight: bold;
  background-color: rgb(238, 220, 192);
}
.message {
  grid-area: 3 / 1 / 4 / 3;
  padding: 15px;
  border: 0;
  border-radius: 5px;
  font-size: inherit;
  font-family: "Oswald", sans-serif;
  font-weight: bold;
  background-color: rgb(238, 220, 192);
}
.counter {
  grid-area: 4 / 1 / 4 / 2;
}
.error {
  grid-area: 4 / 2 / 4 / 3;
  margin-left: 50px;
  color: #6e1020;
}
.sent {
  grid-area: 5 / 1 / 5 / 3;
  color: rgb(238, 220, 192);
  margin: auto;
  text-align: center;
}
button {
  grid-area: 4 / 1 / 5 / 3;
  width: 100px;
  margin-left: calc(50% - 50px);
  text-align: center;
  border: #6e1020 1px solid;
  background-color: #6e1020;
  border-radius: 5px;
  color: rgb(238, 220, 192);
  cursor: pointer;
}
button:hover {
  background-color: #6e10209a;
}
</style>