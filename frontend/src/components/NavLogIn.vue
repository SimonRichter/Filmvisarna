<template>
  <li class="nav_dropbtn" @click="show = !show">@Stefan.And@gmail.com</li>
  <div class="sub-menu" v-if="show">
    <h3 @click="myPage($event)" class="myPage_btn">Bookings</h3>
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
    myPage(ev) {
      console.log("--my page button click event");
    },
    logOut(ev) {
      console.log("--log out button click event");
    },
  },
};
</script>

<style scoped>

li {
  color: rgb(116, 109, 98);
  padding: 16px 18px;
  font-size: 20px;
  cursor: pointer;
}

.nav_dropbtn{
  width: 100px;
  overflow-x: hidden;
  padding: 18px 0px 18px 0px;
  margin-left: 16px;
  color: rgb(161, 152, 138);
}

.nav_dropbtn:hover{
  color:rgb(238, 220, 192);
}

.sub-menu {
  padding-top: 8px;
  position:fixed;
  right: 0;
  top: 100px;
  background-color:#131313;
  width: 150px;
  border-width: 0px 0px 1px 0px;
  border-color: #6e1020;
  border-style: solid;
  animation: dropdown 0.5s linear;
  overflow: hidden;
}

@keyframes dropdown {
  from {height: 0px;}
  to {height: 87px;}
}

h3 {
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  padding-bottom: 18px;
  margin: 0;
  color: rgb(161, 152, 138);
  /* color:rgb(238, 220, 192); */
  font-size: 17px;
  
}

h3:hover{
  color:rgb(238, 220, 192);
}

h3.logOut_btn:hover{
  color: red;
}

</style>