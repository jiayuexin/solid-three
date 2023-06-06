import { Route, Routes, Router, A, useRoutes } from '@solidjs/router'
import { lazy } from 'solid-js'
import {} from 'solid-js/web'
import PageA from '../views/pageA'
import PageB from '../views/pageB'
import PageC from '../views/pageC'
// 路由 第一种 写法
export function RouterChild() {
	return (
		<Router>
			<nav>
				<A href={'/'}>to page A</A>
				<A href={'pageB'}>to page B</A>
				<A href={'pageC'}>to page C</A>
			</nav>
			<Routes>
				<Route component={PageA} path={'/'}></Route>
				<Route component={PageB} path={'/pageB'}></Route>
				<Route component={PageC} path={'/pageC'}></Route>
			</Routes>
		</Router>
	)
}
// 路由第二种写法
const routes = [
	{
		path: '/',
		component: lazy(() => import('../views/pageA')),
	},
	{
		path: '/pageB',
		component: lazy(() => import('../views/pageB')),
	},
	{
		path: '/pageC',
		component: lazy(() => import('../views/pageC')),
	},
]
export function SettingRoutes() {
	const Routes = useRoutes(routes)
	return (
		<Router>
			<nav>
				<A href={'/'}>to page A</A>
				<A href={'pageB'}>to page B</A>
				<A href={'pageC'}>to page C</A>
			</nav>
			<Routes></Routes>
		</Router>
	)
}
