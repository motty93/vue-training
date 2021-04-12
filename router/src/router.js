import Router from 'vue-router'
import Home from './views/Home.vue'
import Users from './views/Users.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/users', component: Users }
]

export default new Router({
  // routes: routesの短縮表記
  routes
})
