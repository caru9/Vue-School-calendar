<template>
  <div v-if="seenalter"> 
       <h2> Modifier la leçon </h2> 
        <div class="smallform">
                <form>
                    <input type="text" v-model="info.weekday" :placeholder="funlesson[0].weekday" required> 
                    <input type="text" v-model="info.hour" :placeholder="funlesson[0].hour" required> 
                    <select v-model="info.class_name" :placeholder="funlesson[0].class_name">
                    <option v-for="item in uniqueclass" :key="item.idclass">
                        {{item.idclass}}
                    </option>     
                    </select>
                    <button v-on:click="updateLes(funlesson[0].idlesson)"> Enregistrer </button>
                </form>
            </div>
    </div>
</template>

<script>
import axios from "axios"; 
export default {
  name: 'Alterlesson',
  props:["funlesson","uniqueclass","seenalter"],
  data () {
      return {
          info :{
              weekday:"", 
              hour:"",
              class_name:"",
          },
      }
  },
  methods: {
    updateLes(idlesson){
            axios
            .post("http://localhost:8000/api/lesson/updatelesson/"+idlesson, { weekday:this.info.weekday,hour:this.info.hour,class_name:this.info.class_name})
            .then ((response) => {
                    this.$parent.altered_done(true); 
                    this.$parent.init(); 
                    this.info=""; 

            })
            .catch( (error) => {
                    console.log(error);
            })
      }    
        
  },

}
</script>

<style scoped>
h2 {
    font:bold; 
    color:#57C8B6; 
    font-size:1.5em; 
    text-align:center; 
}

p {
    text-align:center; 
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
.smallform {
    margin: 0 auto;
    text-align:center; 
}

</style>

