<template>
	<div>
		<Space vertical>
			<Space>
				<Avatar :src="pictures.vueLogoPic" />
				<Avatar round :src="pictures.naiveLogoPic" />
			</Space>

			<Space>
				<Avatar>
					<Button circle text>
						<Icon><User /></Icon>
					</Button>
				</Avatar>
			</Space>

			<Space>
				<Avatar bg-color="pink" :src="pictures.vueLogoPic" />
				<Avatar bg-color="orange" round :src="pictures.naiveLogoPic" />
				<Avatar bg-color="#eeeeee" round>
					<Button circle text>
						<Icon><User /></Icon>
					</Button>
				</Avatar>
			</Space>
		</Space>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import Avatar from '../../src/components/avatar/index.vue'
import Space from '../../src/components/space/index.vue'
import vueLogoPic from '../assets/vue_logo.png'
import naiveLogoPic from '../assets/naive_logo.svg'
import { Icon } from '@vicons/utils'
import { User } from '@vicons/tabler'
import Button from '../../src/components/button/index.vue'

export default defineComponent({
	name: 'AvatarExample',
	components: {
		Avatar,
		Space,
		Icon,
		User,
		Button
	},
	setup() {
		const pictures = reactive({
			vueLogoPic,
			naiveLogoPic
		})
		return { pictures }
	}
})
</script>

<style lang="scss" scoped></style>
