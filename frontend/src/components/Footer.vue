<template>
  <div class="footerContainer">
    <div class="footer">
      <router-link to="/movies"><span>Movies</span></router-link>
      <router-link to="/ourcinemas"><span>Our Cinemas</span></router-link>
      <router-link to="/faq"><span>FAQ</span></router-link>
      <router-link to="/about"><span>About</span></router-link>
    </div>
  </div>
</template>
<script>
export default {
};
</script>

<style scoped>
span {
  color: rgb(82, 12, 12);
  padding: 0px 100px 0px 100px;
  font-size: 15px;
  text-align: center;
  width: 100%;
}
span:hover {
  color: rgb(238, 220, 192);
}
a {
  text-decoration: none;
}
.footerContainer {
  border-top: #631212 2px solid;
  bottom: 0;
  padding: 0;


}
.footer {
  background-color: rgb(116, 109, 98);
  padding-top: 15px;
 text-align: center;
 height: 40px;
  
}
</style>