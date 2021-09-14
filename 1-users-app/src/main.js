import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
Vue.use(VueResource)

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Test from './components/Test';
import User from './components/User';

// modo history es para poder ver midireccion/test por ejemplo
// base indica desde donde va a obtener los directorios o componentes
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path:'/', component: User },
    { path:'/test', component: Test }
  ]
})

Vue.config.productionTip = false

// .$mount indica en donde se va a montar la aplicacion. En este caso en #app
// La otra forma es poner el: #app
new Vue({
  router,
  template: '<App/>',
  components: { App},
  render: h => h(App),
}).$mount('#app')
