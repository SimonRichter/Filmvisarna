<template>
  <div class="navBarContainer">
    <ul class="navBar floatLeft">
      <router-link to="/" class="floatLeft">
        <li><img src="../pictures/logoSmall.png" id="logo" /></li>
      </router-link>
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
  /* border-bottom: 1px #dc0428 solid; */
  /* TEST 1 */
  border-bottom: #96162b 1px solid;
  /* TEST 2 */
  /* TEST 3 */
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
  /* background-color: black; */
  /* TEST 1 */
  background-color: #131313;
  /* TEST 2 */
  /* TEST 3 */

  text-decoration: none;
  padding: 0;
  /* display: flex;
   border-bottom: 1px #dc0428 solid; */
}
/* .navBar {
   display: flex;
   align-items: center;
   list-style-type: none;
   background-color: #000000;
   text-decoration: none;
   padding: 0;
} */

.floatRight {
  width: 50%;
  justify-content: flex-end;
}
.floatLeft {
  width: 50%;
  justify-content: flex-start;
}
.firstListItem {
  padding: 0;
  padding-top: 5px;
  padding-left: 5px;
}

li {
  /* color: white; */
  /* TEST 1 */
  color: rgb(116, 109, 98);
  /* TEST 2 */
  /* TEST 3 */

  padding: 16px 18px;
  font-size: 20px;
}

a {
  text-decoration: none;
}
img {
  margin-left: 20px;
  height: 70px;
  width: auto;
}
</style>