import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/path'

Vue.config.productionTip = false
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuetify from './plugins/vuetify'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

const router = new VueRouter({
  mode:'history',
  routes, 
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
