<template>
	<div class="loading">
			<div class="loader"></div>
	</div>

	<!-- <div class="loading" :style='{"background-color":bgcolor}'></div> -->
</template>

<script>
	export default {
		name: 'loading',
		props: ['bgcolor'],
		components: {},
		mounted() {},
		updated() {},
		methods: {}
	}
</script>

<style scoped>
	.loading {
		width: 100%;
		height: 750PX;
		padding:250px 150px ;
		box-sizing: border-box;
	}

	.loader {
		font-size: 20px;
		width: 1em;
		height: 1em;
		border-radius: 50%;
		text-indent: -9999em;
		animation: load-effect 1s infinite linear;
	}

	@keyframes load-effect {
		0% {
			box-shadow:

				0 -3em 0 .2em #0085D1,

				2em -2em 0 0 #0085D1,

				3em 0 0 -.5em #0085D1,

				2em 2em 0 -.5em #0085D1,

				0 3em 0 -.5em #0085D1,

				-2em 2em 0 -.5em #0085D1,

				-3em 0 0 -.5em #0085D1,

				-2em -2em 0 0 #0085D1;
		}

		12.5% {
			box-shadow:

				0 -3em 0 0 #0085D1,

				2em -2em 0 .2em #0085D1,

				3em 0 0 0 #0085D1,

				2em 2em 0 -.5em #0085D1,

				0 3em 0 -.5em #0085D1,

				-2em 2em 0 -.5em #0085D1,

				-3em 0 0 -.5em #0085D1,

				-2em -2em 0 -.5em #0085D1;
		}
		25% {
			box-shadow:
				0 -3em 0 -.5em #0085D1,

				2em -2em 0 0 #0085D1,

				3em 0 0 .2em #0085D1,

				2em 2em 0 0 #0085D1,

				0 3em 0 -.5em #0085D1,

				-2em 2em 0 -.5em #0085D1,

				-3em 0 0 -.5em #0085D1,

				-2em -2em 0 -.5em #0085D1;
		}
		37.5% {
			box-shadow:

				0 -3em 0 -.5em #0085D1,

				2em -2em 0 -.5em #0085D1,

				3em 0 0 0 #0085D1,

				2em 2em 0 .2em #0085D1,

				0 3em 0 0 #0085D1,

				-2em 2em 0 -.5em #0085D1,

				-3em 0 0 -.5em #0085D1,

				-2em -2em 0 -.5em #0085D1;
		}
		50% {
			box-shadow:

				0 -3em 0 -.5em #0085D1,

				2em -2em 0 -.5em #0085D1,

				3em 0 0 -.5em #0085D1,

				2em 2em 0 0 #0085D1,

				0 3em 0 .2em #0085D1,

				-2em 2em 0 0 #0085D1,

				-3em 0 0 -.5em #0085D1
				-2em -2em 0 -.5em #0085D1;
		}
		62.5% {
			box-shadow:

				0 -3em 0 -.5em  #0085D1,

				2em -2em 0 -.5em  #0085D1,

				3em 0 0 -.5em  #0085D1,

				2em 2em 0 -.5em  #0085D1,

				0 3em 0 0 #0085D1,

				-2em 2em 0 .2em #0085D1,

				-3em 0 0 0 #0085D1,

				-2em -2em 0 -.5em #0085D1;
		}
		75% {
			box-shadow:
				0 -3em 0 -.5em #0085D1,

				2em -2em 0 -.5em #0085D1,

				3em 0 0 -.5em #0085D1,

				2em 2em 0 -.5em #0085D1,

				0 3em 0 -.5em #0085D1
				-2em 2em 0 0 #0085D1,

				-3em 0 0 .2em #0085D1,

				-2em -2em 0 0 #0085D1;
		}
		87.5% {
			box-shadow:

				0 -3em 0 0 #0085D1,

				2em -2em 0 -.5em #0085D1,

				3em 0 0 -.5em #0085D1,

				2em 2em 0 -.5em #0085D1,

				0 3em 0 -.5em #0085D1,

				-2em 2em 0 0 #0085D1,

				-3em 0 0 0 #0085D1,

				-2em -2em 0 .2em #0085D1;
		}
		100% {
			box-shadow:

				0 -3em 0 .2em #0085D1,

				2em -2em 0 0 #0085D1,

				3em 0 0 -.5em #0085D1,

				2em 2em 0 -.5em #0085D1,

				0 3em 0 -.5em #0085D1,

				-2em 2em 0 -.5em #0085D1,

				-3em 0 0 -.5em #0085D1,

				-2em -2em 0 0 #0085D1;
		}
	}

</style>
