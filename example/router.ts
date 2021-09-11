import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/button',
		component: () => import('./views/ButtonExample.vue')
	}
]
export default routes
