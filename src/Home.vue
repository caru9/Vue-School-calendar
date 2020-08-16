<template>
  <div> 
    <div class="menu">

    <router-link to="/absence" class="menu-box"> Gestion des absences <br>  <i class="fa fa-check-square-o" aria-hidden="true"></i></router-link>
    <router-link to="/lesson" class="menu-box"> Gestion des leçons <br> <i class="fa fa-book" aria-hidden="true"></i> </router-link>
    <router-link to="/cluster" class="menu-box"> Gestion des classes et des élèves <br> 	<i class="fa fa-users" aria-hidden="true"></i> </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
  }
}
</script>

<style>
.menu {
  display:grid; 
  grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
  grid-column-gap:10%; 
}


.menu-box {
background-color: var(--dark-grey);
color: white;  
padding: 20px; 
}
</style>