<template>
	<div class="example">
		<div class="nav-bar">
			<div class="nav-item">
				<router-link to="/button">Button</router-link>
			</div>
		</div>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'App',
	components: {}
})
</script>

<style lang="scss">
body {
	margin: 0;
}
#app {
	color: #2c3e50;
	text-align: center;
	font-family: Avenir, Helvetica, Arial, sans-serif;

	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
.example {
	display: flex;
	width: 100vw;
	height: 100vh;
	.nav-bar {
		width: 200px;
		height: 100%;
		border-right: 1px solid #ccc;
		.nav-item {
			display: flex;
			align-items: center;
			padding: 0 16px;
			height: 40px;
			border-bottom: 1px solid #ccc;
		}
	}
	.content {
		flex: 1;
		padding: 16px;
	}
}
</style>
