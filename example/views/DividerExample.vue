<template>
	<div>
		<Space vertical>
			<Space>What<Divider />Why</Space>

			<br />
			<Space>Q<Divider vertical />W<Divider vertical />E<Divider vertical />R</Space>
		</Space>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Divider from '../../src/components/divider/index.vue'

export default defineComponent({
	name: 'DividerExample',
	components: {
		Divider
	},
	props: {
		round: {
			type: Boolean,
			default: false
		}
	},
	setup() {
		return {}
	}
})
</script>

<style lang="scss" scoped></style>
