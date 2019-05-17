import React, {useState, useEffect} from 'react'

//自定义的HOOK是一个函数，名称用use开头，函数内部可以调用其它钩子
function useAge() {
	const [age, setAge] = useState(0);
	useEffect(() => {
		setTimeout(() => {
			setAge(30)
		}, 2000)
	});
	return age;
}

export default function HookTest() {

	const [count, setCount] = useState(0);

	//副作用钩子会在每次渲染时都执行
	useEffect(() => {
		console.log('count');
		document.title = `点击了${count}次`;
	}, [count]);

	//如果仅打算执行一次，传递第二个参数为[]
	useEffect(() => {
		console.log('api调用')
	}, []);

	//多个状态
	const age = useAge();
	const [fruit, setFruit] = useState('banana');
	const [input, setInput] = useState('');
	const [fruits, setFruits] = useState(['apple', 'banana']);

	return (
		<div>
			<p>点击了{count}次</p>
			<button onClick={() => {
				setCount(count + 1)
			}}>点击
			</button>

			<p>年龄：{age ? age : 'loading...'}</p>
			<p>选择的水果：{fruit}</p>
			<p>
				<input type="text" value={input} onChange={e => setInput(e.target.value)} />
				<button onClick={() => setFruits([...fruits, input])}>新增水果</button>
			</p>
			<ul>
				{
					fruits.map(f => (
						<li onClick={() => setFruit(f)} key={f}>{f}</li>
					))
				}
			</ul>
		</div>
	)
}
