import React from 'react';
import logo from './logo.svg';
import './App.css';
import HookTest from './component/HookTest'
import ContextTest from './component/ContextTest'
import ReduxTest from './component/ReduxTest'
import {Provider} from 'react-redux'
import store from './store'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				{/*<img src={logo} className="App-logo" alt="logo" />*/}
				{/*<p>*/}
				{/*Edit <code>src/App.js</code> and save to reload.*/}
				{/*</p>*/}
				{/*<a*/}
				{/*className="App-link"*/}
				{/*href="https://reactjs.org"*/}
				{/*target="_blank"*/}
				{/*rel="noopener noreferrer"*/}
				{/*>*/}
				{/*Learn React*/}
				{/*</a>*/}

				{/*Hook*/}
				{/*<HookTest />*/}

				{/*ContextTest*/}
				{/*<ContextTest />*/}

				<Provider store={store}>
					<ReduxTest />
				</Provider>
			</header>
		</div>
	);
}

export default App;
