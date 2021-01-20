<template>
  <div>
    <div class="passwordInfo">
        
        <h1>{{ 'Enter your E-mail' }} </h1>
        
        <input class="emailInput" type="email" name="" id="" placeholder="E-mail">
        <h2></h2>
        <button class="passwordResetButton" v-on:click="method">Reset Password</button>
  </div>
   
</div>
</template>

<script>

export default {
   
};
</script>

<style scoped>
.passwordInfo{
    margin-top: 50px;
    text-align: center;
}
h1{
    font-size: 50px;
    margin-bottom: 25px;
}

.passwordResetButton{
    margin-top: 16px;
    font-size: 20px;
    border: #6e1020 1px solid;
    background-color: #131313;
    border-radius: 5px;
    color: rgb(238, 220, 192);
    font-family: "Bebas Neue", cursive;
    cursor: pointer;

}
.emailInput{
    font-size: 20px;
    padding-top: 5px;
}

</style>