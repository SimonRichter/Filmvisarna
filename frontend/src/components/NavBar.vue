<template>
  <div class="navBarContainer">
    <ul class="navBar floatLeft">
      <router-link to="/" class="floatLeft">
        <li><img src="../pictures/logoSmall.png" id="logo" /></li>
      </router-link>
    </ul>
    <ul class="navBar floatRight">
      <router-link to="/movies"><li>Movies</li></router-link>
      <router-link to="/about"><li>About</li></router-link>
      <div class="signUpPopUp">
      <Button class="signInButton" @click= "showModal = true">Sign in</Button>
    </ul>
    
  </div>
      <transition name="fade" appear>
        <div class="modal-overlay" v-if= "showModal" @click= "showModal = false"></div>
      </transition>
      <transition name="slide" appear>
        <div class="modal" v-if= "showModal">
          <SignInComp class="signInComp" />
          <button class= "closeModalButton" @click= "showModal = false">X</button>
        </div>
        </transition>
      </div>
</template>

<script>
import SignInComp from "../components/SignInComp.vue";
export default {
  components: { SignInComp },
  data (){
    return{
      showModal: false
    }
  }
};
</script>

<style scoped>
.navBarContainer {
  display: flex;
  /* border-bottom: 1px #dc0428 solid; */
  /* TEST 1 */
  border-bottom: #96162b 1px solid;
  /* TEST 2 */
  /* TEST 3 */
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: fixed;
  width: 100%;
  z-index: 1;
}
.navBar {
  display: flex;
  align-items: center;
  list-style-type: none;
  /* background-color: black; */
  /* TEST 1 */
  background-color: #131313;
  /* TEST 2 */
  /* TEST 3 */

  text-decoration: none;
  padding: 0;
  /* display: flex;
   border-bottom: 1px #dc0428 solid; */
}
/* .navBar {
   display: flex;
   align-items: center;
   list-style-type: none;
   background-color: #000000;
   text-decoration: none;
   padding: 0;
} */

.floatRight {
  width: 50%;
  justify-content: flex-end;
}
.floatLeft {
  width: 50%;
  justify-content: flex-start;
}
.firstListItem {
  padding: 0;
  padding-top: 5px;
  padding-left: 5px;
}

li {
  /* color: white; */
  /* TEST 1 */
  color: rgb(116, 109, 98);
  /* TEST 2 */
  /* TEST 3 */

  padding: 16px 18px;
  font-size: 20px;
}

a {
  text-decoration: none;
}
img {
  margin-left: 20px;
  height: 70px;
  width: auto;
}
.signInButton{
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  color: rgb(116, 109, 98);
  padding: 16px 18px;
  font-size: 20px;
}
.modal-overlay{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rbga(0, 0, 0, 0.5);
}
/*
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-50%) translateY(100vw);
}
*/

.modal{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  width: 40%;
  height: 40%;
  max-width: 100;
  background-color: #131313;
  border-radius: 16px;
  padding: 25px;
}
.closeModalButton{
  font-size: 35px;
  border: #6e1020 1px solid;
  background-color: #131313;
  border-radius: 4px;
  color: rgb(238, 220, 192);
  font-family: "Bebas Neue", cursive;
  width: 60px;
  position:absolute;
  top:0;
  right:0;
  cursor: pointer;
  }
</style>