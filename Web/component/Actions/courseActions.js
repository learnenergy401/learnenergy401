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
        firebaseDb.ref('Course/' + course.name).set(course)
            .then((data) => {
                dispatch({type: "UPLOAD_COURSE_FULFILLED"})
            })
            .catch((err) => {
                dispatch({type: "UPLOAD_COURSE_REJECTED", payload: err})
            })
                        
    }
}


