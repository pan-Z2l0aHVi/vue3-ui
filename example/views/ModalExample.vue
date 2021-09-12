<template>
	<div>
		<Space vertical>
			<Space>
				<Button>弹出</Button>
				<!-- <Modal><Card title="Heading"></Card></Modal> -->
			</Space>

			<Space></Space>
			<Card title="Heading" can-hover></Card>
			<Card title="Heading"></Card>
			<Card title="Heading"></Card>
			<Card title="Heading"></Card>
		</Space>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Modal from '../../src/components/modal/index.vue'
import Button from '../../src/components/button/index.vue'
import Card from '../../src/components/card/index.vue'
import Space from '../../src/components/space/index.vue'

export default defineComponent({
	name: 'ModalExample',
	components: {
		Modal,
		Button,
		Card,
		Space
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
