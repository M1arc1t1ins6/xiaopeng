// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router";
import 'ant-design-vue/dist/antd.css';
import { Modal,Form,Button,Input,Icon,Upload,Select,Switch,InputNumber,Table,Descriptions, Card ,List, Row, Col} from 'ant-design-vue'
import routers from './router';
import axios from 'axios'
import alert from './modules/alert'
// import VueAxios from 'vue-axios'
// import voiceInputButton from 'voice-input-button2'
import * as echarts from 'echarts'
// Vue.prototype.$echarts = echarts
Vue.use(Icon)
Vue.use(Upload)
Vue.use(Input)
Vue.use(Button)
Vue.use(Select)
Vue.use(Form)
Vue.use(Modal)
Vue.use(Switch)
Vue.use(Table)
Vue.use(InputNumber)
Vue.use(Descriptions)
Vue.use(Icon)
Vue.use(Card)
Vue.use(List)
Vue.use(Row)
Vue.use(Col)
// Vue.use(VueAxios, axios)
 
Vue.use(alert)  // 注意，Vue.use方法必须在new Vue之前被调用

Vue.config.productionTip = false

Vue.use(VueRouter)
const router=new VueRouter({
  mode:'history',
  routes:routers,
  base:'/'
})
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     next();
//   } else {
//     let token = localStorage.getItem('user');
//     if (token === 'null' || token === '') {
//       next('/login');
//     } else {
//       next();
//     }
//   }
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
})