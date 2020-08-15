import Vue from 'vue'
//1. 引入路由包
import VueRouter from 'vue-router'
//2. 安装插件包到Vue上, 实例化
Vue.use(VueRouter);
// 各种路由的引入
import Home from '../pages/home.vue'
import Find from '../pages/find.vue'
import User from '../pages/user.vue'
import Detail from '../pages/detail.vue'
import Detail2 from '../pages/detail1.vue'
import Login from '../pages/login.vue'
import Reg from '../pages/reg.vue'
import Erro from '../pages/no-page.vue'
//3. 路由配置
let routes = [{
		path: '/',
		component: Home
	},
	{
		path: '/home',
		component: Home
	},
	{
		path: '/find',
		component: Find
	},
	{
		path: '/user',
		component: User
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/reg',
		component: Reg
	},
	{
		path: '/detail/:id',
		component: Detail,
		name:'detail'
	},
	{
		path: '/detail2/:id',
		component: Detail2,
		name:'detail2'
	},
	{
		path: '/*',
		component: Erro
	},
]

//4.路由实例
let router = new VueRouter({ //插件路由对象

	routes,
});

//5.导出路由实例，让他去控制vue根
export default router
