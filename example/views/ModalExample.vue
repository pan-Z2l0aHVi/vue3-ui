<template>
	<div>
		<Space vertical>
			<Space>
				<Button @click="basicVisible = true">弹出</Button>
				<Modal v-model:visible="basicVisible">
					<Card style="width: 600px" title="标题" :bordered="false">内容</Card>
				</Modal>
			</Space>

			<Space>
				<Button @click="maskNotClosableVisible = true">弹出</Button>
				<Modal v-model:visible="maskNotClosableVisible" :mask-closable="false">
					<Card
						style="width: 600px"
						title="标题"
						:bordered="false"
						closable
						@close="maskNotClosableVisible = false"
					>
						内容
					</Card>
				</Modal>
			</Space>

			<Space>
				<Button @click="generalVisible = true">弹出</Button>
				<Modal v-model:visible="generalVisible">
					<Card style="width: 600px" title="标题" :bordered="false" closable @close="generalVisible = false">
						内容
						<template #footer>底部</template>
					</Card>
				</Modal>
			</Space>

			<Space>
				<Button @click="confirmVisible = true">弹出</Button>
				<Modal v-model:visible="confirmVisible">
					<Card style="width: 600px" title="提示" :bordered="false">
						是否将 Internet Explorer 设置为系统默认浏览器？
						<template #footer>
							<div class="action">
								<Space>
									<Button @click="confirmVisible = false">暂不</Button>
									<Button @click="confirmVisible = false">以后再说</Button>
								</Space>
							</div>
						</template>
					</Card>
				</Modal>
			</Space>
		</Space>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
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
		const basicVisible = ref(false)
		const maskNotClosableVisible = ref(false)
		const generalVisible = ref(false)
		const confirmVisible = ref(false)
		return { basicVisible, maskNotClosableVisible, generalVisible, confirmVisible }
	}
})
</script>

<style lang="scss" scoped>
.action {
	display: flex;
	justify-content: flex-end;
	width: 100%;
}
</style>
