import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/avatar',
		component: () => import('./views/AvatarExample.vue')
	},
	{
		path: '/button',
		component: () => import('./views/ButtonExample.vue')
	}
]
export default routes
