export default function reducer(state={
    user: null,
    userName:null,
    fetching: false,
    fetched: false,
    error: null,
    isLoggedIn:false,
  }, action) {

    switch (action.type) {
        case "FETCH_USER": {
            return {...state, 
                fetching: true}
        }

        case "FETCH_USER_REJECTED": {
            return {
                ...state, 
                fetching: false, 
                error: action.payload
            }
        }
        
        case "FETCH_USER_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                user: action.payload,
                isLoggedIn: action.isLoggedIn,
            }
        }

        case "LOGIN_USER": {
            return {
                ...state,
                fetching: true,
            }
        }

        case "LOGIN_USER_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched:true,
                user: action.payload,
                userName: action.payload.email,
                isLoggedIn:true,
            }
        }
            
        case "LOGIN_USER_REJECTED": {
            return {
                ...state, 
                fetching: false, 
                isLoggedIn: false,
                error: action.payload
            }
        }            
            
        case "LOGOUT_USER": {
            return {
                ...state,
                fetching: true,
                fetched: false,
            }
        }

        case "LOGOUT_USER_FULFILLED": {
            return{
                ...state,
                fetching: false,
                fetched: true,
                user: null,
                isLoggedIn: false
            }
        }
            
        case "LOGOUT_USER_REJECTED": {
            return {
                ...state, 
                fetching: false, 
                isLoggedIn: true,
                error: action.payload
            }
        }     
            
    }

    return state
}
