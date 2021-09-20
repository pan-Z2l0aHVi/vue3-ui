<template>
	<div class="example">
		<div class="aside">
			<div class="nav-bar">
				<div class="nav-item">
					<router-link to="/avatar">Avatar</router-link>
				</div>
				<div class="nav-item">
					<router-link to="/button">Button</router-link>
				</div>
				<div class="nav-item">
					<router-link to="/card">Card</router-link>
				</div>
				<div class="nav-item">
					<router-link to="/divider">Divider</router-link>
				</div>
				<div class="nav-item">
					<router-link to="/modal">Modal</router-link>
				</div>
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

<style>
body {
	margin: 0;
}
</style>
<style lang="scss" scoped>
#app {
	// color: #333639;
	text-align: center;
	font-family: Avenir, Helvetica, Arial, sans-serif;

	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
.example {
	display: flex;
	width: 100vw;
	height: 100vh;
	.aside {
		width: 200px;
		.nav-bar {
			position: fixed;
			overflow-y: auto;
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
	}
	.content {
		overflow-y: auto;
		flex: 1;
		padding: 24px;
	}
}
</style>
