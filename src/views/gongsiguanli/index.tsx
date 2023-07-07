import { useParams, useSearchParams, useRouteData, useLocation, useNavigate } from 'solid-app-router'

export default function () {
	// 获取动态传递的参数   路由跳转参数  或者  动态路由参数
	const params = useParams()
	const [search, setSearch] = useSearchParams()
	// 就是获取location信息
	const location = useLocation()
	// 用来获取 route data 传递的参数
	const data = useRouteData()
	console.log(params, '1111', search, data, location)
	return <div>公司管理</div>
}
