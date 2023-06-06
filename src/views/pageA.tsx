import { createSignal, onMount } from 'solid-js'
//
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
// three 由 三个部分组成   场景scene  相机  渲染器
import * as THREE from 'three'
const scene = new THREE.Scene()
console.log(scene, '创建一个场景')
// 几何体 Geometry
/**
 * 长方体  BoxGeometry
 * 圆柱体  CylinderGeometry
 * 球体    SphereGeometry
 * 圆锥    ConeGeometry
 * 矩形平面 PlaneGeometry
 * 圆平面  CircleGeometry
 */
// 创建一个长方体几何对象 xyz
const geometry = new THREE.BoxGeometry(100, 60, 20)
// 创建一个材质对象
// new THREE.MeshBasicMaterial({
//   color: 0xff0000, // 设置材质颜色为红色
//   transparent: true, //开启透明
//   opacity: 0.5, //设置透明度
// })
// 创建一个受光照影响模型
const material = new THREE.MeshLambertMaterial()
// 设置一个网格模型   例如 电脑 鼠标  等
const mesh = new THREE.Mesh(geometry, material)
// 模型位置
mesh.position.set(0, 0, 0)

// AxesHelper：辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(150)
scene.add(axesHelper)

// 将一个模型添加到三维场景中
scene.add(mesh)

//点光源：两个参数分别表示光源颜色和光照强度
// 参数1：0xffffff是纯白光,表示光源颜色
// 参数2：1.0,表示光照强度，可以根据需要调整
const pointLight = new THREE.PointLight(0xffffff, 1.0)
//点光源位置
pointLight.position.set(100, 60, 50) //点光源放在x轴上

// 定义一个渲染的尺寸
const width = 800
const height = 500
// 创建一个相机
// 创建一个透视投影相机
const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000)
// 设置相机位置
camera.position.set(200, 200, 200)
// 设置相机观察位置  观察目标位置
camera.lookAt(mesh.position)
// 将光源添加到场景中
scene.add(pointLight)
// 创建一个WebGL渲染器
const renderer = new THREE.WebGLRenderer()
// 设置canvas尺寸
renderer.setSize(width, height)
// 渲染器渲染方法
renderer.render(scene, camera)

// 设置相机控件轨道控制器OrbitControls
const controls = new OrbitControls(camera, renderer.domElement)
// 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
controls.addEventListener('change', function () {
	renderer.render(scene, camera) //执行渲染操作
}) //监听鼠标、键盘事件
controls.addEventListener('change', function () {
	// 浏览器控制台查看相机位置变化
	console.log('camera.position', camera.position)
})
// 平行光  环境光
const directionalLightAndAmbientLight = () => {
	// 光源辅助观察   观察点光源的位置
	const pointLightHelper = new THREE.PointLightHelper(pointLight, 10)
	scene.add(pointLightHelper)
	// 改变点光源位置，使用OrbitControls辅助观察
	pointLight.position.set(300, 100, 100)
	//环境光:没有特定方向，整体改变场景的光照明暗
	const ambient = new THREE.AmbientLight(0xffffff, 0.4)
	scene.add(ambient)

	// 平行光
	const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
	// 设置光源的方向：通过光源position属性和目标指向对象的position属性计算
	directionalLight.position.set(80, 100, 50)
	// 方向光指向对象网格模型mesh，可以不设置，默认的位置是0,0,0
	directionalLight.target = mesh
	scene.add(directionalLight)

	// DirectionalLightHelper：可视化平行光
	const dirLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5, 0xff0000)
	scene.add(dirLightHelper)

	// 对比不同入射角，mesh表面对光照的反射效果
	directionalLight.position.set(100, 0, 0)
	directionalLight.position.set(0, 100, 0)
	directionalLight.position.set(100, 100, 100)
	directionalLight.position.set(100, 60, 50)
	//directionalLight.target默认指向坐标原点
}
directionalLightAndAmbientLight()
export default function PageA() {
	onMount(() => {
		const el = document.querySelector('#webgl')
		console.log(el)

		el.appendChild(renderer.domElement)
	})
	return <div id="webgl" style="margin-top: 200px; margin-left: 100px"></div>
}
