
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
        dispatch({type: "FETCH_PURCHASER_FULFILLED", payload: snapshot.val()})
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
        dispatch({type: "FETCH_VENDOR_FULFILLED", payload: snapshot.val()})
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
               firebaseDb.ref('User/' + user.uid).once("value")
                    .then((snapshot) => {
                        dispatch({type: "FETCH_USER_PROFILE_FULFILLED", payload: snapshot.val()})
                    })
                    .catch((err) => {
                        dispatch({type: "FETCH_USER_PROFILE_REJECTED", payload: err})
                    })
           }else{
               dispatch({type: "FETCH_USER_REJECTED", payload: user,isLoggedIn: false})
           }
       }
  
)}}

export function signUpUser(user,profile) {
    return function(dispatch) { 
        firebaseAuth.createUserWithEmailAndPassword(user.email, user.pw)
            .then((data) => {
                dispatch({type: "SIGNUP_USER_FULFILLED"})
                firebaseAuth.signInWithEmailAndPassword(user.email, user.pw)
                    .then((data) => {
                        dispatch({type: "LOGIN_USER_FULFILLED", payload: data})
                        var currentUser = firebaseAuth.currentUser;
                        var user =  {
                            role: profile.role,
                            firstName: profile.firstName,
                            uid : currentUser.uid,
                            email: currentUser.email,
                        }
                        firebaseDb.ref('User/' + user.uid).set(user)
                            .then((data) => {
                                dispatch({type: "UPDATE_USER_PROFILE_FULFILLED", payload: user})
                            })
                            .catch((err) => {
                                dispatch({type: "UPDATE_USER_PROFILE_REJECTED", payload: err})
                            })
                        
                    })
                    .catch((err) => {
                        dispatch({type: "LOGIN_USER_REJECTED", payload: err})
                    })
                }).catch((err) => {
                     dispatch({type: "SIGNUP_USER_REJECTED", payload: err})
                })
    }
}

export function approveUser(user) {
  return function(dispatch) {
    firebaseAuth.createUserWithEmailAndPassword(user.email, user.password) 
      .then((data) => {
      dispatch({type: "SIGNUP_USER_FULFILLED"})
      if (user.role==0) { // push as a purchaser
        firebaseDb.ref('User').push({
          legalEntity: user.legalEntity,
          operatingName: user.operatingName,
          address1: user.address1,
          address2: user.address2,
          city: user.city,
          province: user.province,
          country: user.country,
          postalCode: user.postalCode,
          phone: user.phone,
          fax: user.fax,
          email: user.email,
          adminContact: user.adminContact,
          technicalContact: user.technicalContact,
          ISnumber: user.ISnumber,
          website: user.website,
          password: user.password,
          role: user.role,
        })
        firebaseDb.ref('PurchaserSignup/'+user.key_name).remove().then(function() {
          console.log("removed")
        })
        .catch(function(err) {
          console.log("failed to remove", user.key_name)
        })
       
      } else if (user.role == 1) { // push as a vendor

      } else if (user.role == 2) { //push as an additional resource

      }
    })  
  }
}

export function rejectUser(user) {
  return function(dispatch) {
    if (user.role == 0) { // reject purchaser
      firebaseDb.ref('PurchaserSignup/'+user.key_name).remove().then(function() {
        console.log("removed")
      }).then((data) => {
        dispatch({type: "SIGNUP_USER_REJECTED", paylod: data})
      })
    } else if (user.role == 1) { // reject vendor
      firebaseDb.ref('VendorSignup/'+user.key_name).remove().then(function() {
        console.log("removed")
      }).then((data) => {
        dispatch({type: "SIGNUP_USER_REJECTED", paylod: data})
      })
    } else if (user.role == 2) { // reject additional resource

    }
  }
}

export function signUpPurchaser(user) {
  return function(dispatch) {
    firebaseDb.ref('PurchaserSignup').push({
      email: user.email,
      password: user.password,
      legalEntity: user.legalEntity,
      operatingName: user.operatingName,
      address1: user.address1,
      address2: user.address2,
      city: user.city,
      province: user.province,
      country: user.country,
      postalCode: user.postalCode,
      phone: user.phone,
      fax: user.fax,
      adminContact: user.adminContact,
      technicalContact: user.technicalContact,
      ISnumber: user.ISnumber,
      website: user.website,
      role: 0,
    }).then((data) => {
      dispatch({type: "SIGNUP_USER_FULFILLED", payload: user})
    })
    .catch((err) => {
      dispatch({type: "SIGNUP_USER_REJECTED", payload: err})
    })
  }
}

export function signUpVendor(user) {
  return function(dispatch) {
    firebaseDb.ref('VendorSignup').push({
      email: user.email,
      password: user.password,
      legalEntity: user.legalEntity,
      operatingName: user.operatingName,
      address1: user.address1,
      address2: user.address2,
      city: user.city,
      province: user.province,
      country: user.country,
      postalCode: user.postalCode,
      phone: user.phone,
      fax: user.fax,
      adminContact: user.adminContact,
      technicalContact: user.technicalContact,
      ISnumber: user.ISnumber,
      website: user.website,
      role: 1,
    }).then((data) => {
      dispatch({type: "SIGNUP_USER_FULFILLED", payload: user})
    })
    .catch((err) => {
      dispatch({type: "SIGNUP_USER_REJECTED", payload: err})
    })
  }
}



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
