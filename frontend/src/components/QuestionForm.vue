<template>
  <div class="grid-container-questionForm">
    <form id="questions-form" @submit.prevent="processForm">
      <input
        class="firstName"
        type="text"
        name="firstName"
        v-model="firstName"
        placeholder="First name"
      />
      <input
        class="lastName"
        type="text"
        name="lastName"
        v-model="lastName"
        placeholder="Last name"
      />
      <input
        class="email"
        type="text"
        name="email"
        v-model="email"
        placeholder="Email"
      />
      <textarea
        class="message"
        name="message"
        v-model="message"
        placeholder="Write your message here"
      />
      <button type="submit" @submit="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    };
  },
  methods: {
    processForm: function () {
      const nameOK = this.checkName();
      const emailOK = this.checkEmail();
      const messageOK = this.checkMessage();
      console.log("firstName", this.firstName);
      console.log("lastName", this.lastName);
      console.log("email", this.email);
      console.log("message", this.message);
      if (nameOK == false) {
        console.log("You have invalid characters in name");
      } else if (emailOK == false) {
        console.log("You have not the right form of email");
      } else if (messageOK == false) {
        console.log("Your message is empty or have invalid characters");
      } else {
        let message = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          message: this.message
        }
        this.$store.dispatch("addNewMessage", message);
        console.log("Everythings good, processing form!");
      }
    },
    checkName() {
      let validLetters = /^[A-Za-z]+$/;
      console.log(this.firstName.match(validLetters));
      console.log(this.lastName.match(validLetters));
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
      let validCharacters = /^[a-zA-Z0-9.!%&'+/=?_`-]+$/;
      let trimmedMessage = this.message.trim();
      if (trimmedMessage.match(validCharacters)) {
        return true;
      } else {
        return false;
      }
    },
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
  margin-left: 200px;
  margin-right: 200px;
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