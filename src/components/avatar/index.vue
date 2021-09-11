<template>
	<div class="avatar" :class="{ round, [size]: true }" :style="{ 'background-color': bgColor }">
		<img v-if="!$slots.default" :src="src" alt="avatar" :style="{ 'object-fit': objectFit }" />
		<slot />
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue'

export default defineComponent({
	name: 'Avatar',
	components: {},
	props: {
		src: {
			type: String,
			default: undefined
		},
		round: {
			type: Boolean,
			default: false
		},
		size: {
			type: String as PropType<'small' | 'medium' | 'large'>,
			default: 'medium'
		},
		bgColor: {
			type: String,
			default: undefined
		},
		objectFit: {
			type: String as PropType<'fill' | 'contain' | 'cover' | 'none' | 'scale-down'>,
			default: 'fill'
		}
	},
	setup(props) {
		return { ...toRefs(props) }
	}
})
</script>

<style lang="scss" scoped>
.avatar {
	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 6px;
	overflow: hidden;
	> img {
		width: 100%;
		height: 100%;
	}
	&.round {
		border-radius: 50%;
	}
	&.small {
		width: 24px;
		height: 24px;
	}
	&.medium {
		width: 32px;
		height: 32px;
	}
	&.large {
		width: 48px;
		height: 48px;
	}
}
</style>
