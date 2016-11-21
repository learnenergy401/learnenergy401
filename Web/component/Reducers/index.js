import { combineReducers } from "redux"

import user from "./userReducer"
import profile from "./profileReducer"
import course from "./courseReducer"

export default combineReducers({
    user,
    profile,
    course,
})
