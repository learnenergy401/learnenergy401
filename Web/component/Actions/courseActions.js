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

/*------not using yet-----*/
export function uploadCourseDetail(user,fileObj) {
    return function(dispatch) {
        dispatch({type: "UPLOAD_COURSE_DETAIL"})
        firebaseStorage.child('vendors/'+fileObj.fileName).put(fileObj.file,fileObj.metadata)
            .then((snapshot) =>{
            //use then() to avoid asynchronous case
            url = snapshot.metadata.downloadURLs[0];
            document.getElementById('linkbox').innerHTML = '<a href="' + url + '">Click For File</a>';
            dispatch({type: "UPLOAD_COURSE_DETAIL_FULFILLED"})
            }).catch((err) => {
                dispatch({type: "UPLOAD_COURSE_DETAIL_REJECTED", payload: err})
            })
    }
}