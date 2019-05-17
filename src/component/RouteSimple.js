import React from 'react'
import {BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../store/user.redux'

function Home() {
	return <div>
		<h3>课程列表</h3>
		<ul>
			<li><Link to='/detail/web'>web</Link></li>
			<li><Link to='/detail/python'>python</Link></li>
		</ul>
	</div>
}

//当前用户信息
function About() {
	return <div>
		<h3>个人信息</h3>
		<div>
			<Link to='/about/me'>个人信息</Link>
			<br />
			<Link to='/about/order'>订单查询</Link>
			<Switch>
				<Route path='/about/me' component={() => (<div>me</div>)} />
				<Route path='/about/order' component={() => (<div>order</div>)} />
				<Redirect to='/aboute/me' />
			</Switch>
		</div>
	</div>
}

//传递进来路由器对象
function Detail(props) {
	//1.history:导航指令
	//2.location:当前URL信息
	//3.match：获取参数信息
	console.log(props);
	return <div>
		当前课程：{props.match.params.course}
		<br />
		<button onClick={props.history.goBack}>后退</button>
	</div>
}

function NoMatch({location}) {
	return <div>404,{location.pathname}不存在</div>
}

//路由守卫
//希望用法：<PrivateRoute component={About} path='/about' ...>
@connect(state => ({isLogin: state.user.isLogin}))
class PrivateRoute extends React.Component {
	render() {
		const {component: Comp, isLogin, ...rest} = this.props;
		// 	//做认证
		// 	//render:根据条件动态渲染组件
		return (
			<Route {...rest}
			       render={props =>
				       isLogin
					       ?
					       <Comp />
					       :
					       <Redirect to={{pathname: '/login', state: {redirect: this.props.location.pathname}}} />
			       } />
		)
	}
}

//登录组件
// @connect(state => ({
// 	isLogin: state.user.isLogin,
// 	loading: state.user.loading,
// }), {login})
class Login extends React.Component {
	render() {
		// 	const {location, isLogin, login, loading} = this.props;
		// 	const redirect = location.state.redirect || '/';
		// 	if (isLogin) {
		// 		return <Redirect to={redirect} />;
		// 	}
		return (
			<div />
			// 		<div>
			// 			<p>用户登录</p>
			// 			<hr />
			// 			<button onClick={login}>login</button>
			// 		</div>
		)
	}
}

export default function RouteSimple() {
	return (
		<div>
			<BrowserRouter>
				<div>
					{/*导航链接*/}
					<ul>
						<li>
							<Link to='/'>home</Link>
						</li>
						<li>
							<Link to='/about'>about</Link>
						</li>
					</ul>
					{/*路由的配置：路由即组件*/}
					<Switch>
						<Route exact path='/' component={Home} />
						<PrivateRoute path='/about' component={About} />
						<Route path='/detail/:course' component={Detail} />
						<Route path='/login' component={Login} />
						{/*404 ：没有path，必然匹配*/}
						<Route component={NoMatch} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	)
}
