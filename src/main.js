import Vue from 'vue'
import App from './App'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index'


Vue.config.productionTip = false
Vue.use(elementUI);
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
