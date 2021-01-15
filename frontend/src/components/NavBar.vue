<template>
  <ul class="navBar">
    <!-- Logo - link to Home view -->
    <router-link to="/"><li>Logo</li></router-link>
    <router-link to="/movies"><li>Movies</li></router-link>
    <router-link to="/sign-in"><li>Sign in</li></router-link>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped>
.navBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  margin: 0 1rem 1.5rem;
  padding: 0;
  overflow: hidden;
  background-color: #000000;
  text-decoration: none;
  border-bottom: 1px #dc0428 solid;
}

li {
  color: white;
  text-align: center;
  padding: 14px 16px;
}

a {
  text-decoration: none;
}
</style>