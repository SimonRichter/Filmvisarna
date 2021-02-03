<template>
  <div>
    <div class="passwordInfo">
        <form >
        <h1>{{ 'Enter your E-mail' }} </h1>
        
        <input class="emailInput" type="email" placeholder="E-mail" required />
        <h2></h2>
        <button class="passwordResetButton" v-on:click="showMessage()">Reset Password</button>
        </form>
  </div>
  <div class="messageReset" v-if="message"> An E-mail has been sent with information </div>
</div>
</template>

<script>

export default {
    data() {
        return{
            message: false,
        };
    },
   methods :{
       showMessage(){
           return this.message = true;
       },
   },
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
.messageReset{
    text-align: center;
    font-size: 18px;
    margin-top: 15px;
}

</style>