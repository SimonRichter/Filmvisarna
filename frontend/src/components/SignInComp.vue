<template>
  <div>
    <form @submit="checkLogin">
      <div class="signInInfo">
        <h1>{{ "Sign in" }}</h1>

        <div v-bind:class="{ errorr: error }" v-if="error">
          Not found in our System
        </div>
        <br />

        <input
          class="emailInputSignIn"
          type="email"
          v-model="email"
          placeholder="E-mail"
          required
        />
        <h3></h3>
        <input
          class="passwordInputSignIn"
          type="password"
          v-model="password"
          placeholder="Password"
          required
        />
      </div>
      <div class="signInButtonDiv">
        <button type="submit" value="Sing Up" class="signInButton">
          Sign in
        </button>
      </div>
    </form>

    <div class="forgotPassButtonDiv">
      <button class="forgotPasswordButton" @click="showPasswordModal = true">
        Forgot Password?
      </button>
    </div>
    <div class="signUpInfo">
      <div class="signUpPopUp">
        <h3>{{ "Are you not a member?" }}</h3>
        <Button class="signUpButton" @click="showModal = true">Sign Up</Button>
      </div>

      <transition name="fade" appear>
        <div
          class="modal-overlay"
          v-if="showModal"
          @click="showModal = false"
        ></div>
      </transition>
      <transition name="slide" appear>
        <div class="modal" v-if="showModal">
          <SignUpComp class="signUpComp" />
          <button class="closeModalButton" @click="showModal = false">X</button>
        </div>
      </transition>
    </div>
    <div
      class="modal-overlayPassword"
      v-if="showPasswordModal"
      @click="showPasswordModal = false"
    ></div>
    <div class="modalPassword" v-if="showPasswordModal">
      <ForgotPassword class="ForgotPassword" />
      <button
        class="closePasswordModalButton"
        @click="showPasswordModal = false"
      >
        X
      </button>
    </div>
  </div>
</template>

<script>
import SignUpComp from "../components/SignUpComp.vue";
import ForgotPassword from "./ForgotPassword.vue";
export default {
  components: { SignUpComp, ForgotPassword },
  data() {
    return {
      error: false,
      showModal: false,
      showPasswordModal: false,
      email: null,
      password: null,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.member;
    },
    closeModal() {
      return this.showModal;
    },
  },
  methods: {
    checkLogin: function (a) {
      this.waitAbit();
      if (this.isLoggedIn) {
        return true;
      } else {
        a.preventDefault();
        this.error = true;
      }
    },
    async waitAbit() {
      const credentials = {
        email: this.email,
        password: this.password,
      };
      await this.$store.dispatch("login", credentials);
    },
  },
};
</script>

<style scoped>
.signInInfo {
  margin-top: 50px;
  text-align: center;
  color: aliceblue;
}
h1 {
  font-size: 50px;
  margin-bottom: 15px;
}
h2 {
  font-size: 25px;
  margin-bottom: 5px;
  margin-top: 10px;
}
h3 {
  margin-top: 18px;
}
.signInButtonDiv {
  text-align: center;
}
.signInButton {
  margin-top: 10px;
  font-size: 30px;
  border: #6e1020 1px solid;
  background-color: #131313;
  border-radius: 5px;
  color: rgb(238, 220, 192);
  font-family: "Bebas Neue", cursive;
  cursor: pointer;
}
.forgotPassButtonDiv {
  text-align: center;
  margin-top: 10px;
}
.forgotPasswordButton {
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 15px;
  color: rgb(238, 220, 192);
  font-family: "Bebas Neue", cursive;
}

.signUpButton {
  margin-top: 8px;
  font-size: 20px;
  border: #6e1020 1px solid;
  background-color: #131313;
  border-radius: 5px;
  color: rgb(238, 220, 192);
  font-family: "Bebas Neue", cursive;
  cursor: pointer;
}
.signUpPopUp {
  text-align: center;
}
.passwordInputSignIn {
  font-size: 20px;
  padding-top: 5px;
}
.emailInputSignIn {
  font-size: 20px;
  padding-top: 5px;
}
.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rbga(0, 0, 0, 0.5);
}
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  width: 94%;
  height: 90%;
  max-width: 100;
  background-color: #2b2b2b;
  border-radius: 16px;
  padding: 25px;
}
.closeModalButton {
  font-size: 35px;
  border: #6e1020 1px solid;
  background-color: #131313;
  border-radius: 4px;
  color: rgb(238, 220, 192);
  font-family: "Bebas Neue", cursive;
  width: 60px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}

.modal-overlayPassword {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rbga(0, 0, 0, 0.5);
}

.modalPassword {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  width: 94%;
  height: 90%;
  max-width: 100;
  background-color: #2b2b2b;
  border-radius: 16px;
  padding: 25px;
}
.closePasswordModalButton {
  font-size: 35px;
  border: #6e1020 1px solid;
  background-color: #131313;
  border-radius: 4px;
  color: rgb(238, 220, 192);
  font-family: "Bebas Neue", cursive;
  width: 60px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}
.gone {
  display: none;
}
.errorr {
  font-size: 20px;
  color: red;
}
</style>