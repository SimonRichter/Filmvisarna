<template>
  <li class="nav_dropbtn" @click="show = !show">@User</li>
  <div class="sub-menu" v-if="show">
    <h3 @click="myPage($event)" class="myPage_btn">My bookings</h3>
    <h3 @click="logOut($event)" class="logOut_btn">Log out</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {

    myPage(ev){
      console.log("--my page button click event")
    },
    logOut(ev){
        console.log("--log out button click event")
      }
  }
};
</script>

<style>
.nav_dropbtn{
  cursor: pointer;
}

.sub-menu {
  z-index: 1;
  border: #6e1020 1px solid;
  position: fixed;
  top: 100px;
  background-color: #202020;
  width: 9vw;
  border-radius: 5px;
  margin-top: 10px;
}
</style>