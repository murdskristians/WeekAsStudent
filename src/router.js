import Vue from 'vue'
import Router from 'vue-router'
import Monday from './views/Monday.vue'
import Tuesday from './views/Tuesday.vue'
import Wednesday from './views/Wednesday.vue'
import Thursday from './views/Thursday.vue'
import Friday from './views/Friday.vue'
import Saturday from './views/Saturday.vue'
import Sunday from './views/Sunday.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sunday',
      component: Sunday
    },
    {
      path: '/monday',
      name: 'monday',
      component: Monday
    },
    {
      path: '/tuesday',
      name: 'tuesday',
      component: Tuesday
    },
    {
      path: '/wednesday',
      name: 'wednesday',
      component: Wednesday
    },
    {
      path: '/thursday',
      name: 'thursday',
      component: Thursday
    },
    {
      path: '/friday',
      name: 'friday',
      component: Friday
    },
    {
      path: '/saturday',
      name: 'saturday',
      component: Saturday
    }
  ]
})
