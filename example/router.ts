import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/avatar',
		component: () => import('./views/AvatarExample.vue')
	},
	{
		path: '/button',
		component: () => import('./views/ButtonExample.vue')
	},
	{
		path: '/card',
		component: () => import('./views/CardExample.vue')
	},
	{
		path: '/divider',
		component: () => import('./views/DividerExample.vue')
	},
	{
		path: '/modal',
		component: () => import('./views/ModalExample.vue')
	}
]
export default routes
