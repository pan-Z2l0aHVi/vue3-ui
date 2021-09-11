<template>
	<Press :disabled="disabled" :block="block">
		<button
			class="button"
			:class="{
				disabled,
				block,
				round,
				circle,
				text
			}"
			v-bind="$attrs"
			@click="onClick"
		>
			<span v-if="loading" class="icon">
				<Icon><Loading /></Icon>
			</span>
			<span v-else-if="$slots.leftIcon" class="icon">
				<slot name="leftIcon" />
			</span>
			<span v-if="!(loading && circle)" :class="circle ? 'icon' : 'label'"><slot /></span>
			<span v-if="$slots.rightIcon" class="icon">
				<slot name="rightIcon" />
			</span>
		</button>
	</Press>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue'
import { Icon } from '@vicons/utils'
import Press from '../press/index.vue'
import Loading from '../Loading.vue'

export default defineComponent({
	name: 'Button',
	components: {
		Icon,
		Press,
		Loading
	},
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		},
		block: {
			type: Boolean,
			default: false
		},
		size: {
			type: String as PropType<'small' | 'medium' | 'large'>,
			default: 'medium'
		},
		round: {
			type: Boolean,
			default: false
		},
		circle: {
			type: Boolean,
			default: false
		},
		text: {
			type: Boolean,
			default: false
		}
	},
	emits: ['click'],
	setup(props, { emit }) {
		const onClick = (event: MouseEvent) => {
			if (props.disabled || props.loading) return
			emit('click', event)
		}
		return {
			...toRefs(props),
			onClick
		}
	}
})
</script>

<style lang="scss" scoped>
@import '../../styles/mixins.scss';
.button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 0 12px;
	height: 32px;
	border: 1px solid #ccc;
	border-radius: 6px;
	background: #fff;
	font-size: 14px;

	@include disabled;
	&.block {
		display: flex;
		width: 100%;
	}
	&.round {
		border-radius: 16px;
	}
	&.circle {
		padding: 0;
		width: 32px;
		border-radius: 50%;
	}
	&.text {
		background: unset;
		border: none;
	}
	.icon {
		display: contents;
		font-size: 18px;
	}
	.label {
		padding: 0 6px;
	}
}
</style>
