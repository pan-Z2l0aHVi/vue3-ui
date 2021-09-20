<template>
	<div class="card" :class="{ bordered, 'can-hover': canHover }">
		<div v-if="closable" class="close-icon" @click="$emit('close')">
			<Button circle>
				<Icon><X /></Icon>
			</Button>
		</div>
		<AspectRatio v-if="$slots.cover"><slot name="cover" /></AspectRatio>
		<div v-if="title" class="header">
			<h1>{{ title }}</h1>
			<div v-if="$slots.headerExtra" class="header-extra">
				<slot name="headerExtra" />
			</div>
		</div>
		<div class="content" :class="{ 'with-title': title }"><slot /></div>
		<div v-if="$slots.footer" class="footer"><slot name="footer" /></div>
	</div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import AspectRatio from '../aspect-ratio/index.vue'
import Button from '../button/index.vue'
import { X } from '@vicons/tabler'
import { Icon } from '@vicons/utils'

export default defineComponent({
	name: 'Card',
	components: { AspectRatio, Icon, X, Button },
	props: {
		title: {
			type: String,
			default: undefined
		},
		canHover: {
			type: Boolean,
			default: false
		},
		bordered: {
			type: Boolean,
			default: true
		},
		closable: {
			type: Boolean,
			default: false
		}
	},
	emits: ['close'],
	setup(props) {
		return {
			...toRefs(props)
		}
	}
})
</script>

<style lang="scss" scoped>
.card {
	position: relative;
	box-sizing: border-box;
	width: 100%;
	border-radius: 8px;
	background: #fff;
	text-align: start;
	font-size: 14px;
	.close-icon {
		position: absolute;
		top: 16px;
		right: 16px;
		:deep(.button.circle) {
			border: 0;
			background: #f4f4f4;
			color: #444;
		}
	}
	.header {
		display: flex;
		align-items: center;
		padding: 20px;
		> h1 {
			flex: 1;
			margin: 0;
			font-size: 18px;
		}
		.header-extra {
			display: flex;
			align-items: center;
		}
	}
	.content {
		padding: 20px;
		&.with-title {
			padding-top: 0;
		}
	}
	.footer {
		padding: 0 20px 20px 20px;
	}
	&.bordered {
		border: 1px solid #ddd;
	}
	&.can-hover {
		&:hover {
			box-shadow: 0 2px 10px rgba($color: #000000, $alpha: 0.1);
		}
	}
}
</style>
