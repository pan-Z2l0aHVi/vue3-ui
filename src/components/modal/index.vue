<template>
	<div class="modal">
		<div class="mask"></div>
		<div class="content"><slot /></div>
	</div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'

export default defineComponent({
	name: 'Modal',
	components: {},
	props: {
		vertical: {
			type: Boolean,
			default: false
		}
	},
	setup(props) {
		return {
			...toRefs(props)
		}
	}
})
</script>

<style lang="scss" scoped>
.modal {
	position: relative;
	box-sizing: border-box;
	.mask {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba($color: #000000, $alpha: 0.4);
	}
	.content {
		position: absolute;
		left: 50%;
		height: 50%;
		transform: translate(-50%, -50%);
	}
}
</style>
