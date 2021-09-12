<template>
	<div>
		<Space vertical>
			<Card title="Heading">Content</Card>
			<div style="width: 200px">
				<Card title="Heading">
					<template #cover>
						<img style="width: 100%; height: 100%" src="../assets/vue_logo.png" />
					</template>
					Content
				</Card>
			</div>
			<Card title="Heading" can-hover>Can hover</Card>
			<Card>Without title</Card>
			<Card title="Heading" :bordered="false">No border</Card>
			<Card title="Heading" closable>Closable</Card>
			<Card title="Heading">
				Content
				<template #footer>
					<div>Footer</div>
				</template>
			</Card>
			<Card title="Heading">
				Content
				<template #headerExtra>
					<Space>
						<Icon><Box /></Icon>
						<Icon><Copy /></Icon>
						<Icon><Code /></Icon>
					</Space>
				</template>
			</Card>
		</Space>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '../../src/components/card/index.vue'
import Space from '../../src/components/space/index.vue'
import { Code, Copy, Box } from '@vicons/tabler'
import { Icon } from '@vicons/utils'

export default defineComponent({
	name: 'CardExample',
	components: {
		Card,
		Space,
		Code,
		Copy,
		Box,
		Icon
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
