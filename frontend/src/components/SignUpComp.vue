<template>
  <div>
    <div class="signUpInfo">
        <form action="">
        <h1>{{ 'Become A Member ! ' }} </h1>
        <input class="firstName" type="text" v-model="name" placeholder="First Name">
        <input class="lastName" type="text" v-model="lastName" placeholder="Last Name">
        <h3></h3>
        <input class="email" type="email" v-model="email" placeholder="E-mail">
        <h3></h3>
        <input type="tel" v-model="telephone" placeholder="xxx-xxxxxxx">
        <h3></h3>
        <input type="password" v-model="password" placeholder="Password">
        <h3></h3>
        <input type="password" v-model="passConfirm" placeholder="Password Confirm">
        <h3></h3>
        <button class="signUpConfirmButton" @click.prevent="register()">Sign Up</button>
        </form>
  </div>
   
</div>
</template>

<script>

export default {
    data() {
        return {
            name: '',
            lastName: '',
            email: '',
            telephone: '',
            password: '',
            passConfirm: ''
        }
    },
    methods: {
     register() {
         if(this.checkEmail()){
         if(this.checkPassword()){
            const credentials = {
                name: this.name,
                lastName: this.lastName,
                email: this.email,
                telephone: this.telephone,
                password: this.password
            }
            console.log(credentials);
            this.$store.dispatch('register', credentials)
         }
         else{
             console.log('Password did not match');
         }
         }
         else{
             console.log('Not valid email')
         }
        },
        checkPassword() {
           return this.passConfirm === this.password;
        },
        checkEmail(){
            return this.email.includes('@');
        }
    }
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
h3{
    margin-top: 16px;
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