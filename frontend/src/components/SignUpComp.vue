<template>
  <div>
    <div class="signUpInfo">
        
        <h1>{{ 'Become A Member ! ' }} </h1>
        <input class="firstName" type="text" name="" placeholder="First Name">
        <input class="lastName" type="text" name="" placeholder="Last Name">
        <h3></h3>
        <input class="email" type="email" name="" id="" placeholder="E-mail">
        <h3></h3>
        <input type="password" name="" id="" placeholder="Password">
        <h3></h3>
        <input type="password" name="" id="" placeholder="Password Confirm">
        <h3></h3>
        <button class="signUpConfirmButton" v-on:click="method">Sign Up</button>
  </div>
   
</div>
</template>

<script>

export default {
   
};
</script>

<style scoped>
.signUpInfo{
    margin-top: 50px;
    text-align: center;
}
h1{
    font-size: 50px;
    margin-bottom: 25px;
}

.signUpConfirmButton{
    margin-top: 10px;
    font-size: 30px;
    border: #6e1020 1px solid;
    background-color: #131313;
    border-radius: 5px;
    color: rgb(238, 220, 192);
    font-family: "Bebas Neue", cursive;
    cursor: pointer;
}
.firstName{
    width: 12vh;
    
}
.lastName{
    width: 12vh;
}

</style>