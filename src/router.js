import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './Home.vue'
import Lesson from './Lesson.vue'
import Cluster from './Cluster.vue'
import Abs from './Abs.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes : [
        {path:"/home", component:Home},
        {path:"/lesson", component:Lesson},
        {path:"/cluster", component:Cluster},
        {path:"/absence", component:Abs}
    ]
})

