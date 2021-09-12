<template>
	<div
		class="press"
		:class="{ pressing, block }"
		@mousedown="startPress"
		@mouseup="stopPress"
		@mouseleave="stopPress"
	>
		<slot />
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from 'vue'

export default defineComponent({
	name: 'Press',
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		block: {
			type: Boolean,
			default: false
		}
	},
	setup(props) {
		const pressing = ref(false)
		const startPress = () => {
			if (props.disabled) return
			pressing.value = true
		}
		const stopPress = () => {
			if (props.disabled) return
			pressing.value = false
		}
		return {
			...toRefs(props),
			pressing,
			startPress,
			stopPress
		}
	}
})
</script>

<style lang="scss" scoped>
@import '../../styles/transitions.scss';
.press {
	display: inline-block;
	box-sizing: border-box;
	transition: filter 0.1s;
	&.block {
		display: block;
		width: 100%;
	}
	&.pressing {
		filter: brightness(0.9);
	}
}
</style>
