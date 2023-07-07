import { Routes, Route } from '@solidjs/router'
import Home from '../layout'

export function SettingRoutes() {
	return (
		<Routes>
			<Route path={'/'} component={Home}></Route>
		</Routes>
	)
}
