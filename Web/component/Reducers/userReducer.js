export default function reducer(state={
    user: null,
    userName:null,
    fetching: false,
    fetched: false,
    error: null,
    isLoggedIn:false,
    role: null,
    purchasers: null,
    vendors: null,
    profile:{
        role:null,
        firstName: null,
        // *TODO*
        // add more attribute here in model
        // null as default, i copie role into outer scope for convenience :)
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

        case "FETCH_PURCHASER_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                purchasers: action.payload,
                isLoggedIn: action.isLoggedIn,
            }
        }  

        case "FETCH_VENDOR_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                vendors: action.payload,
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
    
        case "FETCH_USER_PROFILE": {
            return {
                ...state,
                fetching: true,
            }
        }

        case "FETCH_USER_PROFILE_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched:true,
                profile:action.payload,
                role: action.payload.role,
            }
        }
            
        case "FETCH_USER_PROFILE_REJECTED": {
            return {
                ...state, 
                fetching: false, 
                error: action.payload
            }
        }  

        case "FETCH_ROLE": {
            return {...state, 
                fetching: true}
        }

        case "FETCH_ROLE_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                role: action.payload,
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
                role:0,
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
            
        case "LOGIN_ADMIN_USER_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched:true,
                user: action.payload,
                userName: action.payload.email,
                isLoggedIn:true,
                role: 2,
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
