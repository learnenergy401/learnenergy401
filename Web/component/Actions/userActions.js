
import {firebaseApp,firebaseAuth,firebaseDb, firebaseStorage, firebaseAuthInstance } from '../Firebase'

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

export function fetchADSignup() {
  return function(dispatch) {
    firebaseDb.ref('ADSignup').once("value")
      .then((snapshot) => {
        dispatch({type: "FETCH_AD_FULFILLED", payload: snapshot.val()})
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
      } else {
        dispatch({type: "FETCH_USER_REJECTED", payload: user,isLoggedIn: false})
      }
   }
  )}
}

export function approveUser(user) {
  return function(dispatch) {
    firebaseAuthInstance.createUserWithEmailAndPassword(user.email, user.password)
    .then((data) => {
      dispatch({type: "SIGNUP_USER_FULFILLED"})
      firebaseAuthInstance.signInWithEmailAndPassword(user.email, user.password)
      .then((data) => {
        var currentUser = firebaseAuthInstance.currentUser

        if (user.role==0) { // push as a purchaser
          firebaseDb.ref('User/' + currentUser.uid).set({
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

          firebaseDb.ref('User/' + currentUser.uid).set({
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
            owners: user.owners,
            natureBusiness: user.natureBusiness,
            timeBusiness: user.timeBusiness,
            proAffiliation: user.proAffiliation,
            bank: user.bank,
            bonding: user.bonding,
            bondingLimit: user.bondingLimit,
            insurance: user.insurance,
            bankruptcy: user.bankruptcy,
            numEmployees: user.numEmployees,
          })
          firebaseDb.ref('VendorSignup/'+user.key_name).remove().then(function() {
            console.log("removed")
          })
          .catch(function(err) {
            console.log("failed to remove", user.key_name)
          })


        } else if (user.role == 2) { //push as an additional resource

          firebaseDb.ref('User/' + currentUser.uid).set({
            website: user.website,
            email: user.email,
            password: user.password,
            role: user.role,
          })
          firebaseDb.ref('ADSignup/'+user.key_name).remove().then(function() {
            console.log("removed")
          })
          .catch(function(err) {
            console.log("failed to remove", user.key_name)
          })
        }
      })
    })
    firebaseAuthInstance.signOut()
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
      firebaseDb.ref('ADSignup/'+user.key_name).remove().then(function() {
        console.log("removed")
      }).then((data) => {
        dispatch({type: "SIGNUP_USER_REJECTED", paylod: data})
      })
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
      owners: user.owners,
      natureBusiness: user.natureBusiness,
      timeBusiness: user.timeBusiness,
      proAffiliation: user.proAffiliation,
      bank: user.bank,
      bonding: user.bonding,
      bondingLimit: user.bondingLimit,
      insurance: user.insurance,
      bankruptcy: user.bankruptcy,
      numEmployees: user.numEmployees,
      role: 1,
    }).then((data) => {
      dispatch({type: "SIGNUP_USER_FULFILLED", payload: user})
    })
    .catch((err) => {
      dispatch({type: "SIGNUP_USER_REJECTED", payload: err})
    })
  }
}

export function signUpAD(user) {
  return function(dispatch) {
    firebaseDb.ref('ADSignup').push({
      website: user.website,
      email: user.email,
      password: user.password,
      role: 2,
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
