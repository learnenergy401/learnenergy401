
import {firebaseApp,firebaseAuth,firebaseDb, firebaseStorage} from '../Firebase'

export function fetchUsers() {
  return function(dispatch) {
    firebaseDb.ref('SignUpList').once("value")
      .then((snapshot) => {
        dispatch({type: "FETCH_USER_FULFILLED", payload: snapshot.val()})
      })
      .catch((err) => {
        dispatch({type: "FETCH_USER_REJECTED", payload: err})
      })
  }
}


export function getCurrentUser() {
  return function(dispatch) {
     firebaseAuth.onAuthStateChanged((user)=>{
         if (user){
             dispatch({type: "FETCH_USER_FULFILLED", payload: user,isLoggedIn: true})
         }else{
             dispatch({type: "FETCH_USER_FULFILLED", payload: user,isLoggedIn: false})
         }
     }

)}}

export function logInUser(user) {
    return function(dispatch) { 
        firebaseAuth.signInWithEmailAndPassword(user.email, user.pw)
            .then((data) => {
                dispatch({type: "LOGIN_USER_FULFILLED", payload: data})
            })
            .catch((err) => {
                dispatch({type: "LOGIN_USER_REJECTED", payload: err})
            })
        
    }
}

export function logOutUser(user) {
    return function(dispatch) {
        firebaseAuth.signOut()
            .then((data) => {
                console.log(data)
                dispatch({type: "LOGOUT_USER_FULFILLED"})
            })
            .catch((err) => {
                dispatch({type: "LOGOUT_USER_REJECTED", payload: err})
            })
    }
}

