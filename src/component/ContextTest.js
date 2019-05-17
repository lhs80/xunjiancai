import React, {useContext} from 'react'

//创建上下文
const MyContext = React.createContext();
const {Provider, Consumer} = MyContext;

function Child(prop) {
	return (
		<div>Child:{prop.foo}</div>
	)
}

//使用Hook消费
function Child2() {
	const context = useContext(MyContext);
	return (
		<div>Child2:{context.foo}</div>
	)
}

//使用class，指定静态contextType
class Child3 extends React.Component {
	static contextType = MyContext;

	render() {
		return <div>Child3:{this.context.foo}</div>
	}
}

export default function ContextTest() {
	return (
		<div>
			<Provider value={{foo: 'bar'}}>
				{/*消费方法1:Consumer*/}
				<Consumer>
					{value => <Child {...value} />}
				</Consumer>
				{/*消费方法2：hook*/}
				<Child2 />
				{/*消费方式3：contextType*/}
				<Child3 />
			</Provider>
		</div>
	)
}
