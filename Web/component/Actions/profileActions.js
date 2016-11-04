
import {firebaseApp,firebaseAuth,firebaseDb, firebaseStorage} from '../Firebase'

/**
 * sidebar options for profile page
 * @param {object} menuNum - object of menuNum
 * @returns {object} dispatch - Returns the new state of the sidebar.
 */
export function changeMenu(menuNum) {
    return function(dispatch) {
        dispatch({type: "CHANGE_MENU", payload: menuNum})
    }
}
