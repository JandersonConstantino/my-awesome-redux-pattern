import { combineReducers, createStore } from 'redux'
import counter from './ducks/counter'

const reducers = combineReducers({ counter })
const store = createStore(reducers)

export default store
