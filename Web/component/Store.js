import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import reducer from "./Reducers"

/**
* @ignore
*/
const middleware = applyMiddleware(promise(), thunk, logger())

/**
* @ignore
*/
export default createStore(reducer, middleware)
