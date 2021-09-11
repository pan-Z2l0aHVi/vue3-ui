<template>
	<div>
		<Space vertical>
			<Space><Button>Button</Button></Space>

			<Button :disabled="true">Disabled</Button>

			<Button :block="true">Block</Button>

			<Space>
				<Button :circle="true">
					<Icon><User /></Icon>
				</Button>
				<Button :round="true">Round</Button>
				<Button>Rectangular</Button>
			</Space>

			<Space>
				<Button :loading="loading" @click="loading = true">Loading</Button>
				<Button :loading="loading" @click="loading = true">
					<template #leftIcon>
						<Icon><CloudDownload /></Icon>
					</template>
					Loading with icon</Button
				>
				<Button circle :loading="loading" @click="loading = true">
					<Icon><FaceId /></Icon>
				</Button>
				<Button @click="loading = false">Click to reset</Button>
			</Space>

			<Space>
				<Button>
					Button
					<template #leftIcon>
						<Icon><Affiliate /></Icon>
					</template>
				</Button>
				<Button>
					Button
					<template #rightIcon>
						<Icon><BrandGithub /></Icon>
					</template>
				</Button>
			</Space>

			<Space>
				<Button text>Text</Button>
				<Button text circle>
					<Icon><Playlist /></Icon>
				</Button>
			</Space>
		</Space>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Button from '../../src/components/button/index.vue'
import Space from '../../src/components/space/index.vue'
import { Icon } from '@vicons/utils'
import { User, Affiliate, CloudDownload, BrandGithub, FaceId, Playlist } from '@vicons/tabler'

export default defineComponent({
	name: 'ButtonExample',
	components: {
		Button,
		Space,
		Icon,
		User,
		BrandGithub,
		Affiliate,
		CloudDownload,
		FaceId,
		Playlist
	},
	setup() {
		const loading = ref(true)
		return {
			loading
		}
	}
})
</script>

<style lang="scss" scoped></style>
