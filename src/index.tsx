import { render } from 'solid-js/web'
import { useRoutes, A, Router } from '@solidjs/router'
import styles from './index.module.less'
import { RouterChild, SettingRoutes } from './router'
// import routes from './router'
// function App() {
// 	const Routes = useRoutes(routes)
// 	return (
// 		<Router>
// 			<nav>
// 				<A href={'/'}>to page A</A>
// 				<A href={'pageB'}>to page B</A>
// 				<A href={'pageC'}>to page C</A>
// 			</nav>
// 			<Routes></Routes>
// 		</Router>
// 	)
// }
function App() {
	return (
		<>
			{/* <RouterChild></RouterChild> */}
			<SettingRoutes></SettingRoutes>
		</>
	)
}
render(() => <App />, document.querySelector('#app')!)
