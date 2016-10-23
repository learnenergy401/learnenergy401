
import {firebaseApp,firebaseAuth,firebaseDb, firebaseStorage} from '../Firebase'

export function fetchUsers() {
  return function(dispatch) {
    firebaseDb.ref('SignUpList').once("value")
      .then((snapshot) => {
        dispatch({type: "FETCH_USER_FULFILLED", payload: snapshot.val().ggop})
      })
      .catch((err) => {
        dispatch({type: "FETCH_USER_REJECTED", payload: err})
      })
  }
}


export function getCurrentUser() {
// firebaseAuth.signInWithEmailAndPassword('test@gmail.com', '123456');
// firebaseAuth.signOut();
  return function(dispatch) {
       firebaseAuth.onAuthStateChanged((user)=>{
           dispatch({type: "FETCH_USER_FULFILLED", payload: user})
       }
  
)}}