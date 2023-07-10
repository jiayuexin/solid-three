import { useRoutes } from '@solidjs/router'
import Home from '../layout'
import { lazy, createResource, onMount, createSignal } from 'solid-js'
export const children = [
	{
		path: '/',
		component: Home,
		children: [
			{
				path: '/',
				component: lazy(() => import('../views/gongsiguanli')),
				data: () => ({
					name: '公司管理',
					select: true,
				}),
				meta: {
					name: '公司管理',
					select: true,
				},
			},
			{
				path: '/quanxianguanli',
				component: lazy(() => import('../views/quanxianguanli')),
				data: () => ({
					name: '权限管理',
					select: false,
				}),
				meta: {
					name: '权限管理',
					select: false,
				},
			},
			{
				path: '/yuangongguanli',
				component: lazy(() => import('../views/yuangongguanli')),
				data: () => ({
					name: '员工管理',
					select: false,
				}),
				meta: {
					name: '员工管理',
					select: false,
				},
			},
			{
				path: '/zuzhiguanli',
				component: lazy(() => import('../views/zuzhiguanli')),
				data: () => ({
					name: '组织管理',
					select: false,
				}),
				meta: {
					name: '组织管理',
					select: false,
				},
			},
		],
	},
]
export function SettingRoutes() {
	const [count, setCount] = createSignal(1)
	async function fetchData(source, { value, refetching }) {
		console.log(source, value, refetching)

		// 获取数据并返回一个值。
		// `source` 告诉你源 signal 的当前值
		// `value` 告诉你 fetcher 的最后一个返回值；
		// 当调用 `refetch()` 触发 fetcher 时，`refetching` 为 true，
		// 或等于传递的可选数据：`refetch(info)`
		return
	}

	const [data, { mutate, refetch }] = createResource(count, fetchData)

	onMount(() => {
		mutate('3')
		console.log('211111111111111')

		console.log(data.length)
		refetch()
		console.log(data())
	})
	const Routes = useRoutes(children)
	return <Routes></Routes>
}
