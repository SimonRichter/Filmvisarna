<template>
  <div class="footerContainer">
    <ul class="footer">
      <router-link to="/movies"><li>Movies</li></router-link>
      <router-link to="/ourcinemas"><li>Our Cinemas</li></router-link>
      <router-link to="/faq"><li>FAQ</li></router-link>
      <router-link to="/about"><li>About</li></router-link>
    </ul>
  </div>
</template>
<script>
export default {
  components: {

  },
  data() {
    return {
    };
  },
  computed: {
 
  },
};
</script>

<style scoped>
li {
  color: rgb(82, 12, 12);
  padding: 10px 20px 10px 20px;
  font-size: 15px;
  text-align: center;
}
li:hover {
  color: rgb(238, 220, 192);
}
a {
  text-decoration: none;
}
.footerContainer {
  border-top: #631212 2px solid;
  bottom: 0;
  padding: 0;
  position: relative;
  width: 100%;
}
.footer {
  background-color: rgb(116, 109, 98);
  padding: 0;
  
}
</style>