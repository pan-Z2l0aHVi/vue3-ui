<template>
	<div>
		<Space vertical>
			<div>What<Divider />Why</div>

			<div>Q<Divider vertical />W<Divider vertical />E<Divider vertical />R</div>
		</Space>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Divider from '../../src/components/divider/index.vue'
import Space from '../../src/components/space/index.vue'

export default defineComponent({
	name: 'DividerExample',
	components: {
		Divider,
		Space
	},
	setup() {
		return {}
	}
})
</script>

<style lang="scss" scoped></style>
