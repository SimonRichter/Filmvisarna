<template>
  <div class="delMemContainer">
    <button class="delButton" v-show="uno" @click="show()">
      Delete Account
    </button>
    <button class="delButton2" v-show="dos" @click="show2()">
      are you sure you want delete your account?
    </button>
    <button class="delButton3" v-show="tres" @click="show3()">
      like really really really sure you want delete your account?
    </button>
    <button      class="delButton4"      v-show="cuatro"      @click="        delMem();        $router.push('/');      "    >
      c o n f i r m
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return { uno: true, first: false, dos: false, tres: false, cuatro:false };
  },
  computed: {
    curMem() {
      return this.$store.state.member;
    },
  },

  methods: {
    delMem() {
      fetch("/api/logout");
      fetch("/rest/members/" + this.curMem.id, {
        method: "DELETE",
      });
      this.$store.commit("logOutMember");
    },
    show() {
      this.uno = false;
      this.dos = true;
    },
    show2() {
      this.dos = false;
      this.tres = true;
    },
    show3() {
      this.tres = false;
      this.cuatro = true;
    },
  },
};
</script>

<style>
.delMemContainer {
  padding-top: 100px;
  height: 100px;
  text-align: center;
  grid-column: 1/3;
}
.delButton {
  margin-bottom: 20px;

  background-color: teal;

  cursor: pointer;
  width: 40%;
  font-size: 15px;
  transition: 100ms;
}
.delButton:hover {
  transform: scale(1.2);
}
.delButton2 {
  margin-bottom: 20px;

  background-color: rgb(168, 134, 62);
  cursor: pointer;
  width: 60%;
  font-size: 20px;
}

.delButton3 {
  margin-bottom: 20px;
  color: rgb(167, 167, 182);

  background-color: rgb(173, 62, 11);
  cursor: pointer;
  width: 75%;
  font-size: 20px;
}
.delButton4 {
  margin-bottom: 20px;
  padding: 20px;

  background-color: rgb(153, 1, 1);
  color: rgb(255, 255, 255);
  cursor: pointer;
  width: 20%;
  font-size: 20px;
}
</style>


