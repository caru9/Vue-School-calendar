<template>
  <div> 
    <h2> Créer une nouvelle leçon </h2> 
     <div class="bigform">
			<form class="big">
                <input type="text" v-model="info.weekday" placeholder="Jour de la semaine" required> 
                <input type="text" v-model="info.hour" placeholder="Heure de la journée" required> 
				<select v-model="info.class_name" placeholder="Sélectionner une classe">
                <option v-for="item in group" :key="item.idclass">
                     {{item.idclass}}
                </option>     
	            </select>
                <button type=reset v-on:click="createLes"> Enregistrer </button>
			</form>
        </div>
  </div>
</template>

<script>
import axios from "axios"; 
export default {
  name: 'Createlesson',
  props:["group"],
  data () {
      return {
          info :{
              weekday:"",
              hour:"",
              class_name:"",
          }

      }
  },
       methods: {
      createLes(){
            axios
            .post("http://localhost:8000/api/lesson/addlesson", { weekday:this.info.weekday,hour:this.info.hour,class_name:this.info.class_name})
            .then ((response) => {
                    console.log(response); 
                    this.$parent.init(); 
                    this.info=""; 
            })
            .catch( (error) => {
                    console.log(error);
            })
      }    
  }
}
</script>

<style scoped>
h2 {
    font:bold; 
    color:#57C8B6; 
    font-size:1.5em; 
    text-align:center; 
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

