import { For } from 'solid-js'
import { useNavigate } from '@solidjs/router'
import { children } from '../router'

export default function () {
	const navigate = useNavigate()
	const menuClick = (path: string) => {
		navigate(path, {})
	}
	return (
		<div class="menu">
			<For each={children[0].children}>
				{item => {
					return (
						<div class={`menu-select ${item.meta.select ? 'menu-select-active' : ''}`} onClick={() => menuClick(item.path)}>
							{item.data().name}
						</div>
					)
				}}
			</For>
		</div>
	)
}
