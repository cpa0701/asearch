import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import routerConfig from './router.config.js'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: routerConfig
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
