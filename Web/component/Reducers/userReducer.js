export default function reducer(state={
    user: null,
    userName:null,
    fetching: false,
    fetched: false,
    error: null,
    isLoggedIn:false,
    role: null,
    profile:{
        firstName: null,
        // *TODO*
        // add more attribute here in model
        // null as default
    },
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
           
            
        case "SIGNUP_USER": {
            return {
                ...state,
                fetching: true,
            }
        }
        case "SIGNUP_USER_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched:true,
            }
        }
            
        case "SIGNUP_USER_REJECTED": {
            return {
                ...state, 
                fetching: false, 
                error: action.payload
            }
        }
            
        case "UPDATE_USER_PROFILE": {
            return {
                ...state,
                fetching: true,
            }
        }
        case "UPDATE_USER_PROFILE_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched:true,
                profile:action.payload,
                role: action.payload.role,
            }
        }
            
        case "UPDATE_USER_PROFILE_REJECTED": {
            return {
                ...state, 
                fetching: false, 
                error: action.payload
            }
        }      
//        Login
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
