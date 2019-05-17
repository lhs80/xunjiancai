import React from 'react'
// import store from '../store'
import {connect} from 'react-redux'

const mapStateToProps = state => ({num: state});
const mapDispatchToProps = {
	add: () => ({type: 'add'}),
	minus: () => ({type: 'minus'}),
};

// function ReduxTest({num, add, minus}) {
// 	return (
// 		<div>
// 			<p>{num}</p>
// 			<button onClick={minus}>-</button>
// 			<button onClick={add}>+</button>
// 		</div>
// 	)
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest)

//装饰器写法
@connect(mapStateToProps, mapDispatchToProps)
class ReduxTest extends React.Component {
	render() {
		const {num, add, minus} = this.props;
		return (
			<div>
				<p>{num}</p>
				<button onClick={minus}>-</button>
				<button onClick={add}>+</button>
			</div>
		)
	}
}

export default ReduxTest;
