/**
 * Profile Reducer
 * @exports {state} reducer
 * @param {object} action
 * @return {state} state
 */

export default function reducer(state={
    menu: 0,
    
  }, action) {

    switch (action.type) {
        case "CHANGE_MENU": {
            return {...state, 
               menu: action.payload }
        }    
    }

    return state
}
