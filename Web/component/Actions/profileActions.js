
import {firebaseApp,firebaseAuth,firebaseDb, firebaseStorage} from '../Firebase'

export function changeMenu(menuNum) {
    return function(dispatch) {
        dispatch({type: "CHANGE_MENU", payload: menuNum})
    }
}

