import { createStore, combineReducers } from "redux";
import reducerAdd from './reducer'

const reducer = combineReducers({
    add: reducerAdd
})

export default createStore(reducer)