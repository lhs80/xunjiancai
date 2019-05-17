import {createStore, applyMiddleware, combineReducers} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {counterRedux} from './count.redux'
import {user} from './user.redux'

const index = createStore(
	combineReducers({counter: counterRedux, user}),
	applyMiddleware(logger, thunk)
);


export default index;
