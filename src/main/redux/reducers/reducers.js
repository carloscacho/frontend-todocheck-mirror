import { combineReducers } from 'redux';

//import reducers
import todoReducer  from './todoReducer';

const rootReducer = combineReducers({
    todo: todoReducer
})

export default rootReducer;