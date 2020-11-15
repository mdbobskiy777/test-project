import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import thunkMiddleWare from "redux-thunk"
import statisticReducer from "./statistic-reducer"
import chartsReducer from "./charts-reducer"

let reducers = combineReducers({
    usersPage:statisticReducer,
    chartsPage:chartsReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(reducers,
    composeEnhancers(applyMiddleware(thunkMiddleWare))
)