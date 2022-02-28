import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
require("./mock")
Vue.config.productionTip = false

import bottomBar from "@/components/bottomBar.vue"
Vue.component("bottomBar",bottomBar)

import topBar from "@/components/topBar.vue"
Vue.component("topbar",topBar)

import white from "@/components/white.vue"
Vue.component("white",white)

import chooseTime from "@/components/ruku/choosetime.vue"
Vue.component("chooseTime",chooseTime)

// 环形进度条
import { Circle } from 'vant';
Vue.use(Circle);

// 轮播图
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);

//键盘
import { NumberKeyboard } from 'vant';
Vue.use(NumberKeyboard);

// 时间选择层
import { DatetimePicker } from 'vant';

Vue.use(DatetimePicker);

// 选择层
import { Picker } from 'vant';
Vue.use(Picker);

//选择框
import { Form } from 'vant';
import { Field } from 'vant';

Vue.use(Form);
Vue.use(Field);

// topbar
import { NavBar } from 'vant';

Vue.use(NavBar);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
