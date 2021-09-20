<template>
	<div>
		<!-- <Space vertical>
			<Space>
				<Modal v-model:visible="modalVisible">
					<Card style="width: 400px" title="Heading" :bordered="false" closable @close="modalVisible = false">
						<template #footer>
							<Button>按钮</Button>
						</template>
					</Card>
				</Modal>
			</Space>

			<Space></Space>
		</Space> -->
		<div class="test">
			<Button class="float right" @click="modalVisible = true">弹出</Button>
			<Button class="float left" @click="modalVisible = true">弹出</Button>
			<Modal v-model:visible="modalVisible" :mask-closable="true">
				<Card style="width: 400px" title="Heading" :bordered="false" closable @close="modalVisible = false">
					<template #footer>
						<Button>按钮</Button>
					</template>
				</Card>
			</Modal>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
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
	setup() {
		const modalVisible = ref(false)
		onMounted(() => {
			setTimeout(() => {
				modalVisible.value = true
			}, 4000)
		})
		return { modalVisible }
	}
})
</script>

<style lang="scss" scoped>
.test {
	position: relative;
	width: 100%;
	height: calc(100vh - 48px);
	.float {
		position: absolute;
		&.right {
			top: 0;
			right: 0;
		}
		&.left {
			top: 0;
			left: 0;
		}
	}
}
</style>
