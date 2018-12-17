import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Layout from './views/Layout.vue'
import Button from './views/Button.vue'
import Cacsder from './views/Cacsder.vue'
import Switch from './views/Switch.vue'
import Number from './views/Number.vue'
import Select from './views/Select.vue'
import Score from './views/Score.vue'
import Missing from './views/Missing.vue'
import Leave from './views/Leave.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/layout',
      name: 'layout',
      component: Layout
    },
    {
      path: '/button',
      name: 'button',
      component: Button
    },{
      path: '/cacsder',
      name: 'cacsder',
      component: Cacsder
    },{
      path: '/switch',
      name: 'switch',
      component: Switch
    },{
      path: '/number',
      name: 'number',
      component: Number
    },{
      path: '/select',
      name: 'select',
      component: Select
    },{
      path: '/score',
      name: 'score',
      component: Score
    },{
      path: '/missing',
      name: 'missing',
      component: Missing
    },{
      path: '/leave',
      name: 'leave',
      component: Leave
    }
  ]
})
