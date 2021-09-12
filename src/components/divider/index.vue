<template>
	<div class="divider" :class="{ vertical }"></div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'

export default defineComponent({
	name: 'Divider',
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
.divider {
	box-sizing: border-box;
	margin: 24px 0;
	width: 100%;
	height: 1px;
	background: #ddd;
	&.vertical {
		display: inline-block;
		margin: 0 8px;
		width: 1px;
		height: 1em;
		vertical-align: middle;
	}
}
</style>
