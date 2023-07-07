import { For } from 'solid-js'
import { useNavigate } from 'solid-app-router'
import { children } from '../router'

export default function () {
	const navigate = useNavigate()
	const menuClick = (path: string) => {
		navigate(path, {})
	}
	return (
		<div class="menu">
			<For each={children}>
				{item => {
					return (
						<div class={`menu-select ${item.data.select ? 'menu-select-active' : ''}`} onClick={() => menuClick(item.path)}>
							{item.data.name}
						</div>
					)
				}}
			</For>
		</div>
	)
}
