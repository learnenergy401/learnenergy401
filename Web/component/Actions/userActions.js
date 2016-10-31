
import {firebaseApp,firebaseAuth,firebaseDb, firebaseStorage} from '../Firebase'

export function fetchRole(user) { // TODO FIX
  return function(dispatch) {
    firebaseDb.ref('User').once('value').then((snapshot) => {
      // grab current user information and see what role number it is
      // dispatch the role value so the state of current user can change
      dispatch({type:"FETCH_ROLE_FULFILLED", payload: user})
    })
  }
}

export function fetchPurchaserSignup() {
  return function(dispatch) {
    firebaseDb.ref('PurchaserSignup').once("value")
      .then((snapshot) => {
        dispatch({type: "FETCH_USER_FULFILLED", payload: snapshot.val()})
      })
      .catch((err) => {
        dispatch({type: "FETCH_USER_REJECTED", payload: err})
      })
  }
}

export function fetchVendorSignup() {
  return function(dispatch) {
    firebaseDb.ref('VendorSignup').once("value")
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
              if (user.email == "admin@gmail.com") {
                dispatch({type: "LOGIN_ADMIN_USER_FULFILLED", payload: data})
              } else {
                dispatch({type: "LOGIN_USER_FULFILLED", payload: data})
              }
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
