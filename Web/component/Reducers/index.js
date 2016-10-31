import { combineReducers } from "redux"

import user from "./userReducer"
import profile from "./profileReducer"

export default combineReducers({
    user,
    profile,
})
