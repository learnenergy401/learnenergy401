import {firebaseApp,firebaseAuth,firebaseDb, firebaseStorage} from '../Firebase'

export function fetchCourseList() {
    return function(dispatch) {
        dispatch({type: "UPLOAD_COURSE"})
        firebaseDb.ref('Course/' + course.name).set(course)
            .then((data) => {
                dispatch({type: "UPLOAD_COURSE_FULFILLED"})
            })
            .catch((err) => {
                dispatch({type: "UPLOAD_COURSE_REJECTED", payload: err})
            })
                        
    }
}


export function uploadCourse(course) {
    return function(dispatch) {
        dispatch({type: "UPLOAD_COURSE"})
        firebaseDb.ref('Course/' + course.courseName).set(course)
            .then((data) => {
                dispatch({type: "UPLOAD_COURSE_FULFILLED"})
            })
            .catch((err) => {
                dispatch({type: "UPLOAD_COURSE_REJECTED", payload: err})
            })
                        
    }
}

export function fetchVendorCourse(email) {
    return function(dispatch) {
        dispatch({type: "FETCH_VENDORS_COURSE"})
        firebaseDb.ref('Course').orderByChild('courseVendorEmail').equalTo(email).on("value",function(snapshot){
            dispatch({type:"FETCH_VENDORS_COURSE_FULFILLED",payload:snapshot.val()})
        },function(errorObject){
            dispatch({type:"FETCH_VENDORS_COURSE_REJECTED"})
            console.log("The read failed: " + errorObject.code);
        }
        )
    }
}
