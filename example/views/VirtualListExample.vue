<template>
	<VirtualList :list="list" />
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import VirtualList from './components/VirtualList.vue'

export default defineComponent({
	name: 'App',
	components: {
		VirtualList
	},
	setup() {
		const fakeList = Array(500)
			.fill(0)
			.map((item, index) => ({
				id: index,
				name: `test${index}`
			}))
		const list = reactive(fakeList)
		return { list }
	}
})
</script>

<style></style>
