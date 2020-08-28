<template>
  <div> 
    <h1> Se connecter </h1> 
        <div class="bigform">
        <form class="big">
            <input type="email" v-model="credentials.email" placeholder="Adresse e-mail" required>
            <input type="password" v-model="credentials.password" placeholder="Mot de passe" required>
            <button v-on:click="loginSubmit"> Enregistrer </button>
        </form>
        </div>
        <div> <p v-if="wrongcred"> L'adresse mail ou le mot de passe sont incorrect </p>
        </div>
  </div>
</template>

<script>
import axios from "axios"; 
export default {
  name: 'Login',
  data () {
      return {
          credentials: {
                email:"",
                password:""
          },
          user:[],
          wrongcred:false
      }
  },
  methods: {
      loginSubmit(){
            axios
            .post("http://localhost:8000/api/auth", { email:this.credentials.email, password:this.credentials.password})
            .then ((response) => {
                   this.user=response.data; 
                    this.$emit("userlogged",true)
            })
            .catch( (error) => {
                    console.log(error);
                    this.wrongcred=true; 
            })
      }    
  }
}
</script>

<style scoped>
h1 {
    font:bold; 
    color:#188A86;
    font-size:35px;; 
    text-align:center; 
    padding-bottom: 25px; 
}


.bigform > form {
    width: 300px; 
    margin: 0 auto;
}

form > input[type="text"], input[type="email"],
input[type="password"], select {
    padding: 10px;
    border: 1px solid #dddddd;
    margin-bottom: 15px;
    box-sizing:border-box;
}
form > input[type="submit"] {
    padding: 10px;
    background-color: var(--dark-green);
    border: 0;
    box-sizing: border-box;
    cursor: pointer;
    font-weight: bold;
}
.big > input[type="text"]{ width:100%; }
.big > input[type="email"]{ width:100%; }
.big > input[type="password"]{ width:100%; }
.big > input[type="submit"] { width:100%; } 

</style>

