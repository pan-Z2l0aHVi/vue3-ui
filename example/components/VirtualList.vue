<template>
	<ul class="virtual-list-box">
		<li v-for="item in list" :key="item.id" class="list-item">
			{{ item.name }}
		</li>
	</ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export default defineComponent({
	name: 'VirtualList',
	props: {
		list: {
			type: Array as PropType<string[]>,
			default: () => []
		}
	},
	setup(props) {
		console.log(props.list)
	}
})
</script>

<style lang="scss" scoped></style>
