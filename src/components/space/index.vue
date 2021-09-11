<template>
	<div class="__space__" :class="[size, vertical ? 'vertical' : 'horizontal']"><slot /></div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue'

export default defineComponent({
	name: 'Space',
	props: {
		vertical: {
			type: Boolean,
			default: false
		},
		size: {
			type: String as PropType<'small' | 'medium' | 'large'>,
			default: 'medium'
		}
	},
	emits: ['click'],
	setup(props) {
		return {
			...toRefs(props)
		}
	}
})
</script>

<style lang="scss">
// FIXME:
// scoped 无法使用 *
// 全局 class 名特殊处理预防冲突
.__space__ {
	display: flex;
	&.horizontal {
		flex-flow: row wrap;
		&.small {
			> * {
				margin-right: 8px;
			}
		}
		&.medium {
			> * {
				margin-right: 16px;
			}
		}
		&.large {
			> * {
				margin-right: 32px;
			}
		}
		> * {
			&:last-child {
				margin-right: unset;
			}
		}
	}
	&.vertical {
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		&.small {
			> * {
				margin-bottom: 8px;
			}
		}
		&.medium {
			> * {
				margin-bottom: 16px;
			}
		}
		&.large {
			> * {
				margin-bottom: 32px;
			}
		}
		> * {
			&:last-child {
				margin-bottom: unset;
			}
		}
	}
}
</style>
