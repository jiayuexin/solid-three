import { createSignal } from 'solid-js'
//
const [count, setCount] = createSignal({
	name: '张三',
	age: 28,
})
const clickBtn = () => {
	setCount(num => {
		num.age += 1
		num.name = '李四'
		return num
	})
}
export default function PageA() {
	return (
		<>
			<button onClick={clickBtn}>增加</button>
			<div>页面A{count().age}</div>
		</>
	)
}
