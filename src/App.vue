<template>
	<div id="app">
		<Cell :data='detail'> </Cell>
	</div>
</template>

<script>
	import Cell from './pages/detail1.vue'

	export default {
		name: 'App',
		components: {
			Cell
		},
		data() {
			return {
				// 首页的组件
				detail: [{
					title: '长途搬家较重要的环节就是包装，包装一定要达到长途运输的标准业设计包装',
					des1: '在传统大家电中，洗衣机的产品设计可以用不温不火来形容，在AWE2018惊艳登场双驱洗衣机，也并没像人们想象中的引领洗衣机设计变革，依然还是几家企业在推广;而多筒复式结构洗衣机、免污式洗衣机、“AI衣物识别”技术、大屏智能模块以及其它洗涤技术，各企业的产品都有不同的设计和侧重，洗衣机市场呈现出百花齐放之势',
					des2: '在传统大家电中，洗衣机的产品设计可以用不温不火来形容，在AWE2018惊艳登场双驱洗衣机，也并没像人们想象中的引领洗衣机设计变革，依然还是几家企业在推广;而多筒复式结构洗衣机、免污式洗衣机、“AI衣物识别”技术、大屏智能模块以及其它洗涤技术，各企业的产品都有不同的设计和侧重，洗衣机市场呈现出百花齐放之势',
					des3: '在传统大家电中，洗衣机的产品设计可以用不温不火来形容，在AWE2018惊艳登场双驱洗衣机，也并没像人们想象中的引领洗衣机设计变革，依然还是几家企业在推广;而多筒复式结构洗衣机、免污式洗衣机、“AI衣物识别”技术、大屏智能模块以及其它洗涤技术，各企业的产品都有不同的设计和侧重，洗衣机市场呈现出百花齐放之势',
					image1: 'http://msn-img-nos.yiyouliao.com/inforec-20200812-dbadaafa6e2b3c0e49816b6783b74476.jpg?time=1597237101&signature=8CF0E142E4F3BB85288E2A3D64EC2BA0',
					image2: 'http://msn-img-nos.yiyouliao.com/inforec-20200812-44dff4214a9f7f1936e7d8d5c09fbaae.jpg?time=1597237101&signature=30F6BCFAF7198822FE118902D2C05FC7',
					time:'2019-08-07'

				}],
				banner: [{
						id: 2,
						banner: '/images/banner/banner.jpg',
						title: '1.标题',
						sub_title: '1.副标题'
					},
					{
						id: 3,
						banner: '/images/banner/banner1.jpg',
						title: '2.标题',
						sub_title: '2.副标题'
					},
					{
						id: 1,
						banner: '/images/banner/banner2.jpg',
						title: '3.标题',
						sub_title: '3.副标题'
					},
				],
				username: '',
				password: ''
			}
		}
	}
</script>

<style>
	#app {
		width: 100%;
		height: 100%;
		background: #fff;
	}
</style>
