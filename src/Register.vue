<template>
  <div> 
    <h1> Créer un compte </h1> 
     <div class="bigform">
			<form class="big">
                <input type="text" v-model="info.firstname" placeholder="Prénom" required> 
                <input type="text" v-model="info.lastname" placeholder="Nom" required> 
				<input type="email" v-model="info.email" placeholder="Adresse e-mail" required>
				<input type="password" v-model="info.password" placeholder="Mot de passe" required>
	            <button v-on:click="createAccount"> Enregistrer </button>
			</form>
        </div>
  </div>
</template>

<script>
import axios from "axios"; 
export default {
  name: 'Register',
  data () {
      return {
          info :{
              firstname:"",
              lastname:"",
              email:"",
              password:"",
          }

      }
  },
       methods: {
      createAccount(){
            axios
            .post("http://localhost:8000/api/register", { firstname:this.info.firstname, lastname:this.info.lastname,
             email:this.info.email,password:this.info.password})
            .then ((response) => {
                    console.log(response); 
                    this.$emit("event_out",true); 
            })
            .catch( (error) => {
                    console.log(error);
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

