<template>
  <div>
    <div class="signUpInfo">
      <form @submit="checkForm">
        <h1>{{ "Become A Member ! " }}</h1>
        <div class="error" v-if="error">Passwords do not match</div>
        <br />
        <input
          class="firstName"
          type="text"
          v-model="name"
          placeholder="First Name"
          pattern="[a-zA-Z]+"
          oninvalid="setCustomValidity('Alphabets only. ')"
          oninput="setCustomValidity('')"
          required
        />
        <input
          class="lastName"
          type="text"
          v-model="lastName"
          placeholder="Last Name"
          pattern="[a-zA-Z]+"
          oninvalid="setCustomValidity('Alphabets only. ')"
          oninput="setCustomValidity('')"
          required
        />
        <h3></h3>
        <input type="email" v-model="email" placeholder="E-mail" required />
        <h3></h3>
        <input
          type="tel"
          v-model="telephone"
          pattern="[0-9]{10,14}"
          placeholder="Phone(max 14 digits)"
          oninput="setCustomValidity('')"
          required
        />
        <h3></h3>
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          required
        />
        <h3></h3>
        <input
          type="password"
          v-model="passConfirm"
          placeholder="Confirm Password"
          required
        />
        <h3></h3>
        <button type="submit" value="Sing Up" class="signUpConfirmButton">
          Sign Up
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: false,
      name: null,
      lastName: null,
      email: null,
      telephone: null,
      password: null,
      passConfirm: null,
    };
  },
  methods: {
    checkForm: function (x) {
      const credentials = {
        name: this.name,
        lastName: this.lastName,
        email: this.email,
        telephone: this.telephone,
        password: this.password,
      };
      if (this.password === this.passConfirm) {
        this.$store.dispatch("register", credentials).then((x) => {
          true;
        });
        return true;
      }
 
      x.preventDefault();
      this.error = true;
    },
  },
};
</script>

<style scoped>
.signUpInfo {
  margin-top: 50px;
  text-align: center;
}
h1 {
  font-size: 50px;
  margin-bottom: 10px;
}
h3 {
  margin-top: 16px;
}
.error {
  font-size: 20px;
  color: red;
}

.signUpConfirmButton {
  margin-top: 10px;
  font-size: 30px;
  border: #6e1020 1px solid;
  background-color: #131313;
  border-radius: 5px;
  color: rgb(238, 220, 192);
  font-family: "Bebas Neue", cursive;
  cursor: pointer;
}
.firstName {
  width: 12vh;
}
.lastName {
  width: 12vh;
}
</style>