import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.component("tab-home", {
  template: "<div>Home component</div>"
});
Vue.component("tab-posts", {
  template: "<div>Posts component</div>"
});
Vue.component("tab-archive", {
  template: "<div>Archive component</div>"
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
