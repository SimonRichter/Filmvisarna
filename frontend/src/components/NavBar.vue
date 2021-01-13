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
   margin: 0;
   padding: 0;
   overflow: hidden;
   background-color: #333;
   text-decoration: none;
}

li {
   color: wheat;
   text-align: center;
   padding: 14px 16px;
}

li:hover {
   background-color: #111;
}

a {
   text-decoration: none;
}
</style>