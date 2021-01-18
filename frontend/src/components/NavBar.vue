<template>
  <div class="navBarContainer">
    <ul class="navBar floatLeft">
      <router-link to="/" class="floatLeft"><li>Logo</li></router-link>
    </ul>
    <ul class="navBar floatRight">
      <router-link to="/movies"><li>Movies</li></router-link>
      <router-link to="/about"><li>About</li></router-link>

      <router-link to="/sign-in"><li>Sign in</li></router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navBarContainer {
  display: flex;
  border-bottom: 1px #dc0428 solid;
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
  background-color: #000000;
  text-decoration: none;
  padding: 0;
}

.floatRight {
  width: 50%;
  justify-content: flex-end;
}
.floatLeft {
  width: 50%;
  justify-content: flex-start;
}

li {
  color: white;
  padding: 16px 18px;
  font-size: 19px;
}

a {
   text-decoration: none;
}
</style>