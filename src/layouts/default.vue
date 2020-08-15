<template>
	<div class="default">
		<Loading v-show="this.$root.bLoading" />
		<Header v-show='this.$root.bNav'></Header>
		<router-view></router-view>
		<Footer v-show='this.$root.bFoot'></Footer>
	</div>
</template>

<script>
	import Header from './header.vue'
	import Footer from './footer.vue'
	import Loading from '../components/loading.vue'
	export default {
		name: 'default',
		data() {
			return {
				
			}
		},
		props: {

		},
		components: {
			Header,
			Footer,
			Loading
		},
		mounted() {
		},
		updated() {},
		methods: {
			checkRootData(path) {
				if (/home|find|user/.test(path)) {
					this.nav = this.$root.bNav = this.$root.bFoot = true
				}
				if (/login|reg/.test(path)) {
					this.nav = this.foot = this.$root.bNav = this.$root.bFoot = false
				}
				if (/detail|detail2/.test(path)) {
					this.$root.bNav = false;
					this.foot = this.$root.bFoot = false;
				}
			}
		},
		watch: {
			$route: {

				handler(nextValue) {
					let path = nextValue.path;
					this.checkRootData(path)
				}
			}
		},
	}
</script>

<style>

</style>
