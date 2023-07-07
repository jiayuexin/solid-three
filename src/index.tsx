import { render } from 'solid-js/web'
import { Router } from '@solidjs/router'
import { SettingRoutes } from './router'
function App() {
	return (
		<Router>
			<SettingRoutes></SettingRoutes>
		</Router>
	)
}
render(() => <App />, document.querySelector('#app')!)
