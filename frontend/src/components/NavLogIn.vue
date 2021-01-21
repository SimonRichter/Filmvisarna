<template>
  <div class="sub-menu">
      <h3 @click="myPage($event)" class="myPage_btn">My bookings</h3>
      <h3 @click="logOut($event)" class="logOut_btn">Log out</h3>
  </div>
</template>

<script>
export default {
  data (){
    return{
      showModal: false
    }
  },
 
  methods: {
    
    myPage(ev){
      console.log("--my page button click event")
    },
    logOut(ev){
        console.log("--log out button click event")
      }
  }
}
</script>

<style>
  .sub-menu {
  border: #6e1020 1px solid;
  position: absolute;
  top:100px;
  background-color: #202020;;
  width: 131px;
  border-radius: 5px;
  margin-top: 10px;
}
</style>