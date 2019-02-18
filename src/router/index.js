import Vue from 'vue'
import Router from 'vue-router' 
import index from '../pages/index'
import VCharts from 'v-charts'
Vue.use(VCharts)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
