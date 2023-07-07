import { useRoutes } from 'solid-app-router'
import Home from '../layout'
import { lazy, For } from 'solid-js'
export const children = [
	{
		path: '/',
		component: Home,
		// children: [
		// 	{
		// 		path: '/',
		// 		component: lazy(() => import('../views/gongsiguanli')),
		// 		data: () => ({
		// 			name: '公司管理',
		// 			select: true,
		// 		}),
		// 	},
		// 	{
		// 		path: '/quanxianguanli',
		// 		component: lazy(() => import('../views/quanxianguanli')),
		// 		data: () => ({
		// 			name: '权限管理',
		// 			select: false,
		// 		}),
		// 	},
		// 	{
		// 		path: '/yuangongguanli',
		// 		component: lazy(() => import('../views/yuangongguanli')),
		// 		data: () => ({
		// 			name: '员工管理',
		// 			select: false,
		// 		}),
		// 	},
		// 	{
		// 		path: '/zuzhiguanli',
		// 		component: lazy(() => import('../views/zuzhiguanli')),
		// 		data: () => ({
		// 			name: '组织管理',
		// 			select: false,
		// 		}),
		// 	},
		// ],
	},
]
export function SettingRoutes() {
	const Routes = useRoutes(children)
	return <Routes></Routes>
}
