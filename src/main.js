import Vue from 'vue'
//引入基础样式
import './assets/css/base.css';
// 引入字体比例控制
import './assets/font/font.js';
// 引入默认输出组件
import Default from './layouts/default.vue'
// import app from './App.vue'
// 引入路由组件
import router from './plugins/router.js'
// 引入拦截器
import './plugins/axios.js'

// 引入vuex的状态管理
import store from './plugins/vuex.js'
import * as types from './store/types.js';
Vue.prototype.$types = types; //为了在组件内部使用types类型，无需处处导入

//强刷 同步
let local = window.localStorage.getItem('user');
if (local) {
	store.commit(types.UPDATA_USER, JSON.parse(local))
}
// 引入vant
import vant from 'vant';
import 'vant/lib/index.css';
Vue.use(vant);


Vue.config.productionTip = false

let Vm = new Vue({
	data: {
		bNav: true,
		bFoot: true,
		bLoading: false,
	},
	render: h => h(Default),
	router,
	store
}).$mount('#app')
export default Vm;
