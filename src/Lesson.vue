<template>
  <div> 
    <h1> Gestion des leçons </h1> 
    <h2> Liste de mes leçons </h2>
    <table class="wowtable">
    <thead>
        <tr> 
        <th> ID de la leçon</th>
        <th> Jour de la semaine</th>
        <th> Heure </th>
        <th> Classe </th>
        <th> Supprimer </th>
        <th> Modifier </th>
        </tr>  
    </thead>
    <tbody>
        <tr v-for="(lesson, index) in lessonlist" :key="lesson.idlesson">
                    <td>{{lesson.idlesson}}</td>
                    <td>{{lesson.weekday}}</td>
                    <td>{{lesson.hour}}</td>
                    <td>{{lesson.class_name}}</td>
                    <td> <button @click="deleteless(lesson,index)"> <i class="fa fa-trash"></i> </button> </td>
                    <td> <button @click="alterlesson(lesson)"> <i class="fa fa-pencil"></i> </button> </td>
        </tr>    
    </tbody>
    </table>
    <div>
    <Alterlesson v-bind:uniqueclass="uniqueclass" v-bind:funlesson="funlesson" v-bind:seenalter="seenalter"></Alterlesson>
    </div>
    <p v-if="lessaltered"> La leçon a bien été modifiée </p>

    <Createlesson v-bind:group="uniquegroup"></Createlesson>
    

       
  </div>
</template>

<script>
import axios from "axios"; 
import Createlesson from "./Createlesson.vue"
import Alterlesson from "./Alterlesson.vue"
export default {
  name: 'Lesson',
  components:{Alterlesson,Createlesson},
  data () {
      return {
          lessonlist: [],
          uniquegroup:[],
          funlesson:[],
          uniqueclass:[],
          seenalter:false,
          lessaltered:false,
          lessaltered:false, 
      }
  },
  methods: {
      deleteless(lesson,index) {
          axios
          .delete("http://localhost:8000/api/lesson/deletelesson/" + lesson.idlesson)
          .then((response)=> {
              this.lessonlist.splice(index,1)
          }) 
          .catch( (error) => {
                    console.log(error); 
          })
    },
    alterlesson(lesson){ 
         axios 
        .post("http://localhost:8000/api/lesson/alterlesson/" + lesson.idlesson)
        .then((response) =>{
          this.funlesson=response.data.funlesson; 
          this.uniqueclass=response.data.uniquegroup; 
          this.seenalter=true; 
          console.log(this.funlesson); 
        })
          .catch((error) =>{
           console.log(error); 
         })
    },
    altered_done(jobdone) {
        this.seenalter=false; 
        this.lessaltered=jobdone; 
    },
  init() {
         axios 
        .get("http://localhost:8000/api/lesson")
        .then((response) =>{
          this.lessonlist=response.data.lessonlist; 
          this.uniquegroup=response.data.uniquegroup; 
          console.log(this.lessonlist); 
        })
          .catch((error) =>{
           console.log(error); 
         })
  },
  },
  mounted(){
      this.init()
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

.wowtable {
    width: 80%; 
    border-collapse: collapse; 
    margin: 0 auto; 
}

.wowtable td, .wowtable th {
    border: 1px solid #ddd;
    padding: 8px;
    text-align:center; 
}

.wowtable tr:nth-child(odd){background-color: #f2f2f2;}

button {
    border:none; 
    text-decoration:none; 
}

p {
    text-align:center; 
}
</style>

