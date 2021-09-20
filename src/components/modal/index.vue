<template>
	<teleport to="body">
		<transition name="fade">
			<div v-show="visible" class="modal">
				<div class="mask" @click.self="onMaskClick">
					<transition name="swell">
						<div
							v-show="visible"
							ref="mainRef"
							class="main"
							:style="`transform-origin: ${scaleOrigin.x}px ${scaleOrigin.y}px`"
						>
							<slot />
						</div>
					</transition>
				</div>
			</div>
		</transition>
	</teleport>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref, watchEffect, onUnmounted } from 'vue'

export default defineComponent({
	name: 'Modal',
	components: {},
	props: {
		visible: {
			type: Boolean,
			default: false
		},
		maskClosable: {
			type: Boolean,
			default: true
		}
	},
	emits: ['update:visible'],
	setup(props, { emit }) {
		const triggerCoordinate = reactive({
			x: 0,
			y: 0
		})
		const scaleOrigin = reactive<{ x: number | 'center'; y: number | 'center' }>({
			x: 'center',
			y: 'center'
		})
		const mainRef = ref<HTMLElement>()
		const onMaskClick = () => {
			if (!props.maskClosable) return
			emit('update:visible', false)
		}
		const setCoordinate = (event: MouseEvent) => {
			if (mainRef.value instanceof HTMLElement) {
				triggerCoordinate.x = event.clientX
				triggerCoordinate.y = event.clientY
				scaleOrigin.x = triggerCoordinate.x - mainRef.value.offsetLeft
				scaleOrigin.y = triggerCoordinate.y - mainRef.value.offsetTop
			}
		}
		const onCoordinateEvent = () => {
			document.addEventListener('click', setCoordinate)
		}
		const offCoordinateEvent = () => {
			document.removeEventListener('click', setCoordinate)
		}
		const SWELL_DURATION = 300
		const resetCoordinate = () => {
			setTimeout(() => {
				scaleOrigin.x = 'center'
				scaleOrigin.y = 'center'
				triggerCoordinate.x = 0
				triggerCoordinate.y = 0
			}, SWELL_DURATION)
		}
		watchEffect(() => {
			if (!props.visible) {
				offCoordinateEvent()
				resetCoordinate()
			} else {
				onCoordinateEvent()
			}
		})
		onUnmounted(() => {
			offCoordinateEvent()
		})
		return {
			...toRefs(props),
			scaleOrigin,
			mainRef,
			onMaskClick
		}
	}
})
</script>

<style lang="scss" scoped>
@import '../../styles/transitions.scss';
.swell-enter-active,
.swell-leave-active {
	transition: transform 0.3s, opacity 0.15s;
}
.swell-enter-from,
.swell-leave-to {
	opacity: 0;
	transform: scale(0);
}
.modal {
	box-sizing: border-box;
	.mask {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgba(0, 0, 0, 0.4);

		user-select: none;
		.main {
			user-select: text;
		}
	}
}
</style>
