// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//@ts-ignore
import Sortable from 'vue-sortable'
import draggable from 'vuedraggable'
//@ts-ignore
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(Sortable)
Vue.use(draggable)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
