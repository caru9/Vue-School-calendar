<template>
  <div id='app'> 
    <Header></Header>
    <div v-if="!connected">
            <h1> Bienvenu sur le site de school calendar </h1> 
            <p v-if="registered"> Votre compte à bien été créer. Merci de vous connecter. </p>
        
              <div class="section1" >
                    <button @click="seelogin =true"> Se connecter </button> 
                    <button @click="seelogin =false"> Créer un compte </button> 
                    <div v-if="seelogin">  <Login v-on:userlogged="event_logged"></Login>  </div> 
                    <div v-else>  <Register v-on:event_out="event_registered"></Register> </div>  
              </div>
     </div>  
     <div v-else> 
                <div class="grid-menu">
                <div class="box"><router-link to="/lesson"> Gestion de leçons </router-link></div>
                <div class="box"><router-link to="/cluster"> Gestion des classes et des élèves </router-link></div>
                <div class="box"><router-link to="/absence"> Gestion des absences </router-link></div>
                </div>

                <router-view></router-view>

     </div>    

    <Footer></Footer>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Login from './Login.vue'
import Register from './Register'
export default {
  name: 'app',
  components: {Header,Login,Register,Footer},
  data () {
    return {
        seelogin:true,
        connected:false,
        registered:false,
    }
  },
  methods: {
    event_registered(message) {
      this.registered = message; 
    },
    event_logged(message) {
      this.connected=message; 
    }
  }
}
</script>

<style scoped>
button {
  padding: 20px; 
  border-radius: 8px;
  text-decoration:none; 
  color:#FFBC00;
  background-color:whitesmoke;   
  font-size:25px; 
  border:none;
}

.section1 {
  text-align:center; 
}

h1 {
    font:bold; 
    color:#188A86;
    font-size:35px;; 
    text-align:center; 
    padding-bottom: 25px; 
}

.grid-menu { 
  display:grid; 
  grid-template-columns:1fr 1fr 1fr;
}

.box{
  background-color: whitesmoke; 
  text-align:center; 
}

.grid-menu > .box > a {
  font-size: 20px; 
  color: grey;
}

</style>


