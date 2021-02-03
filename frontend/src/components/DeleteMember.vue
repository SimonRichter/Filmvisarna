<template>
  <button class="delButton" @click="delMem();$router.push('/')">Delete Account</button>
</template>

<script>
export default {
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
  },
};
</script>

<style>
.delButton{
 
  cursor: pointer;

}
</style>


