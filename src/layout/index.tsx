import { lazy } from 'solid-js'
import { Routes, Route } from '@solidjs/router'
import Menu from './menu'
import Content from './content'
const children = [
	{
		path: 'gongsiguanli',
		component: lazy(() => import('../views/gongsiguanli')),
	},
	{
		path: 'quanxianguanli',
		component: lazy(() => import('../views/quanxianguanli')),
	},
	{
		path: 'yuangongguanli',
		component: lazy(() => import('../views/yuangongguanli')),
	},
	{
		path: 'zuzhiguanli',
		component: lazy(() => import('../views/zuzhiguanli')),
	},
]

export default function () {
	return (
		<div class="layout">
			<Menu />
			<Content />
			<Routes>
				<Route path={'/'} component={lazy(() => import('../views/gongsiguanli'))}></Route>
				<Route path={'/quanxianguanli'} component={lazy(() => import('../views/quanxianguanli'))}></Route>
				<Route path={'/yuangongguanli'} component={lazy(() => import('../views/yuangongguanli'))}></Route>
				<Route path={'/zuzhiguanli'} component={lazy(() => import('../views/zuzhiguanli'))}></Route>
			</Routes>
		</div>
	)
}
