<template>
  <li class="nav_dropbtn" ref="dropdownMenu" @click="show = !show">{{ loggedIn.name }}</li>
  <div class="sub-menu" v-if="show">
    <router-link to="/my-page"><h3 @click="myPage($event)" class="myPage_btn">Bookings</h3></router-link>
    <h3 @click="logOut();$router.push('/')" class="logOut_btn">Log out</h3>
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
    logOut() {
      fetch("/api/logout");
      this.$store.commit("setMember", null);
    },
    myPage(ev) {
      console.log("--my page button click event");
    },
    documentClick(e){
        let el = this.$refs.dropdownMenu
        let target = e.target
        if ( el !== target && !el.contains(target)) {
          this.show=false
        }
      }
  },
  computed: {
    loggedIn() {
      console.log(this.$store.state.member.name);
      return this.$store.state.member;
    },
  },
  created () {
      document.addEventListener('click', this.documentClick)
    },
    destroyed () {
    // important to clean up!!
    document.removeEventListener('click', this.documentClick)
  }
};
</script>

<style scoped>
li {
  color: rgb(116, 109, 98);
  padding: 16px 18px;
  font-size: 20px;
  cursor: pointer;
}

.nav_dropbtn {
  overflow-x: hidden;
  padding: 18px 0px 18px 0px;
  margin-left: 16px;
  color: rgb(161, 152, 138);
}

.nav_dropbtn:hover {
  color: rgb(238, 220, 192);
}

.sub-menu {
  padding-top: 8px;
  position: fixed;
  right: 0;
  top: 100px;
  background-color: #131313;
  width: 9vw;
  border-width: 0px 0px 1px 0px;
  border-color: #6e1020;
  border-style: solid;
  animation: dropdown 0.5s linear;
  overflow: hidden;
}

@keyframes dropdown {
  from {
    height: 0px;
  }
  to {
    height: 87px;
  }
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

h3:hover {
  color: rgb(238, 220, 192);
}

h3.logOut_btn:hover {
  color: red;
}
</style>