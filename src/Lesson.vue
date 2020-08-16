<template>
    <div>
        <h1> Gestion des leçons </h1>     
        <h2> Liste de mes leçons </h2>  
        <button v-on:click="toogle" type="button">Toggle</button>
        <div if-on:spanVisible> 
          <input type="text" v-model="weekday" placeholder="Jour de la semaine" required> 
					<input type="text" v-model="hour" placeholder="Heure de la journée" required> 
					<select class="class_name" v-model="class_name">
             <option v-for="group in grouplist" v-bind:key="group.id"> {{group}} </option>
          <button v-on:click="lessonAdd(lesson)"> Enregistrer </button>  
           </div>
 

      <table class="wowtable">
			<thead>
                <tr>
                    <th> ID de la leçon </th>
                    <th> Jour de la semaine</th>
                    <th> Heure </th>
                    <th> Classe </th>
                </tr>
			</thead>
			<tbody>
                <tr v-for="(lesson,index) in lessonlist" v-bind:key="lesson.id">
                    <td>{{lesson.idlesson}}</td>
                    <td>{{lesson.weekday}}</td>
                    <td>{{lesson.hour}}</td>
                    <td>{{lesson.class_name}}</td>
                    <td> <button v-on:click="lessondelete(index)"> Delete </button>
                </tr>    
            </tbody>
		</table>
    </div>
</template>

<script>
import axios from "axios"; 
export default {
    name: 'Lesson',
    data () {
    return {
      lesson: {
        weekday="",
        hour="", 
        class_name=""
      },
      lessonlist: null,
      uri:"http://localhost:8000/api/lesson",
      spanVisible: true
    }
  },
  methods: {
    toogle () {
        this.spanVisible = !this.spanVisible
      },
      lessonAdd(){
        axios.post("http://localhost:8000/api/lesson/addlesson",this.lesson)
        .then((response)=> {
          console.log(response.data); 
        })
        .catch((error)=>{
          console.log(error); 
        })
      },
      lessondelete(){
        axios.delete("http://localhost:8000/api/lesson/addlesson",this.index)
        .then((response)=> {
          console.log(response.data); 
        })
        .catch((error)=>{
          console.log(error); 
        })
      }
  },
  mounted () {
    axios
      .get(this.uri)
      .then((response) => {
            this.lessonlist=response.data.lessonlist;
            this.uniquegroup=response.data.uniquegroup; 
        })
        .catch((error)=>{
            console.log(error);
        })
}
}

</script>
<style scoped>
</style>