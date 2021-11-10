import { combineReducers, createStore, applyMiddleware,compose } from "redux";
import tasksReducer from"./Reducers/tasks-reducer"
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducers = combineReducers({
    tasks:tasksReducer, 
})


const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
window.__store__=store


export default store;