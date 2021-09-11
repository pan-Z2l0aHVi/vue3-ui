<template>
	<div class="spin-wrapper" :class="[spinning && 'spinning', speed]"><slot /></div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Spin',
	props: {
		spinning: {
			type: Boolean,
			default: false
		},
		speed: {
			type: String,
			default: 'normal' // slow normal fast
		}
	}
})
</script>

<style lang="scss" scoped>
@keyframes rotate {
	0% {
		transform: rotate(0);
	}
	100% {
		transform: rotate(360deg);
	}
}
.spin-wrapper {
	display: inline-block;
	line-height: 0; // 消除<img>底部 3px
	&.spinning {
		animation: rotate infinite linear;
		&.slow {
			animation-duration: 1600ms;
		}
		&.normal {
			animation-duration: 800ms;
		}
		&.fast {
			animation-duration: 400ms;
		}
	}
}
</style>
