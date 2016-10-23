export default function reducer(state={
    user: null,
    fetching: false,
    fetched: false,
    error: null,
    isLoggedIn:false
  }, action) {

    switch (action.type) {
      case "FETCH_USER": {
        return {...state, fetching: true}
      }
      case "FETCH_USER_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_USER_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          user: action.payload,
        }
      }
      case "FETCH_USER_LOGGED_IN": {
        return {...state, isLoggedIn: true, user: action.payload}
      }
      case "FETCH_USER_NOT_LOGGED_IN": {
        return {...state, isLoggedIn: false, user: action.payload}
      }
    }

    return state
}
