<template>
  <div class="navBarContainer">
    <ul class="navBar floatLeft">
      <router-link to="/">
        <img src="../pictures/logoV3.png" class="logo" />
      </router-link>
    </ul>
    <ul class="navBar floatRight">
      <router-link to="/movies"><li>Movies</li></router-link>
      <router-link to="/ourcinemas"><li>Our Cinemas</li></router-link>
      <router-link to="/faq"><li>FAQ</li></router-link>
      <router-link to="/about"><li>About</li></router-link>
      <button class="signInButton" v-if="!loggedIn" @click="showModal = true">
        Sign in
      </button>
      <NavLogIn v-if="loggedIn" />
    </ul>
  </div>

  <transition name="fade" appear>
    <div
      class="modal-overlay"
      v-if="showModal"
      @click="showModal = false"
    ></div>
  </transition>
  <transition name="slide" appear>
    <div v-bind:class="{ gone: !change }" class="modal" v-if="showModal">
      <SignInComp class="signInComp" />
      <button class="closeModalButton" @click="showModal = false">X</button>
    </div>
  </transition>
</template>
<script>
import NavLogIn from "../components/NavLogIn.vue";
import SignInComp from "../components/SignInComp.vue";
export default {
  components: {
    NavLogIn,
    SignInComp,
  },
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.member;
    },
    change() {
      return !this.$store.state.member;
    },
    isOurCinemas() {
      return this.$route.name === "OurCinemas";
    },
  },
};
</script>

<style scoped>
li {
  color: rgb(116, 109, 98);
  padding: 16px 18px;
  font-size: 20px;
}
li:hover {
  color: rgb(238, 220, 192);
}
a {
  text-decoration: none;
}
.logo {
  align-items: right;
  padding: 0px 0px 0px 0px;
  height: 80px;
  width: auto;
}
.navBarContainer {
  display: flex;
  border-bottom: #96162b 1px solid;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: fixed;
  width: 100%;
  z-index: 10;
}
.navBar {
  display: flex;
  align-items: center;
  list-style-type: none;
  background-color: #131313;
  text-decoration: none;
  padding: 0;
}
.floatRight {
  padding-right: 35px;
  width: 50%;
  justify-content: flex-end;
}
.floatLeft {
  padding-left: 35px;
  width: 50%;
  justify-content: flex-start;
}
.firstListItem {
  padding: 0;
  padding-top: 7px;
}
.signInButton {
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  color: rgb(116, 109, 98);
  padding: 16px 18px;
  font-size: 20px;
}
.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rbga(0, 0, 0, 0.5);
}
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  height: 25vw;
  width: 42vw;
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
.trans {
  opacity: 0.9;
  border: none;
}
.gone {
  display: none;
}
</style>