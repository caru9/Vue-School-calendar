import Vue from 'vue'
import VueRouter from 'vue-router'
import Lesson from './Lesson.vue'
import Cluster from './Cluster.vue'
import Home from './Home.vue'

Vue.use(VueRouter)



export default new VueRouter({
  mode: 'history', 
  routes : [
    {
      path: "/home", 
      name:"Home",
      component: Home
    },
    {
    path: "/absence", 
    name:"Absence",
    component: Absence
    },
    {
    path:"/cluster",
    name:"cluster",
    component:Cluster
    },
    {
    path: "/lesson", 
    name:"Lesson",
    component: Lesson
  }  
  ]
})



