<template>
  <div id='app'> 
    <Header></Header>
    <router-link to="/home"> Menu </router-link>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
export default {
  name: 'app',
  components:{Header,Footer},
  data () {
  }, 
  methods:{
  }
}
</script>

<style>
:root {
    --dark-green :#188A86; 
    --yellow : #FFBC00; 
    --ocean:#57C8B6; 
    --dark-grey:#898F96; 
    --light-grey: #E7E9EC; 
    --white-smoke:rgb(244,245,251);  
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
    font:bold; 
    color:var(--dark-grey);
    font-size:35px;; 
    text-align:center; 
    padding-bottom: 25px; 
}

h2 {
    font:bold; 
    color:var(--ocean); 
    font-size:1.5em; 
    text-align:center; 
}

h3 {
    color:var(--yellow); 
    font-size:1.1em; 
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
.wowtable {
    width: 80%; 
    border-collapse: collapse; 
    margin: 0 auto; 
}

.wowtable td, .wowtable th {
    border: 1px solid #ddd;
    padding: 8px;
}

.wowtable tr:nth-child(odd){background-color: #f2f2f2;}


th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color:var(--dark-grey);
  color: white;
}




</style>
