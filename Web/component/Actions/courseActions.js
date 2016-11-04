import {firebaseApp,firebaseAuth,firebaseDb, firebaseStorage} from '../Firebase'

function  jsonToArray(json){
        var arr = [];
        for (var prop in json) {
            arr.push(json[prop]);
        }
        return arr
    }

export function fetchCourseList() {
    return function(dispatch) {
        dispatch({type: "UPLOAD_COURSE"})
        firebaseDb.ref('Course/' + course.name).set(course)
            .then((data) => {
                dispatch({type: "UPLOAD_COURSE_FULFILLED"})
            })
            .catch((err) => {
                dispatch({type: "UPLOAD_COURSE_REJECTED", payload: err.code})
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
                dispatch({type: "UPLOAD_COURSE_REJECTED", payload: err.code})
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

export function fetchVendorCourse(email) {
    return function(dispatch) {
        dispatch({type: "FETCH_VENDORS_COURSE"})
        firebaseDb.ref('Course').orderByChild('courseVendorEmail').equalTo(email).on("value",function(snapshot){
            dispatch({type:"FETCH_VENDORS_COURSE_FULFILLED",payload:snapshot.val()})
        },function(errorObject){
            dispatch({type:"FETCH_VENDORS_COURSE_REJECTED",payload:errorObject.code})
        })
    }
}

export function fetchCourse() {
    return function(dispatch) {
        dispatch({type: "FETCH_COURSE"})
        firebaseDb.ref('Course').on("value",function(snapshot){
            dispatch({type:"FETCH_COURSE_FULFILLED",payload:snapshot.val()})
        },function(errorObject){
            dispatch({type:"FETCH_COURSE_REJECTED",payload:errorObject.code})
        })
    }
}

export function fetchACourse(courseName) {
    return function(dispatch) {
        dispatch({type: "FETCH_A_COURSE"})
        firebaseDb.ref('Course').orderByChild('courseName').equalTo(courseName).on("value",function(snapshot){
            if (snapshot.val()){
                dispatch({type:"FETCH_A_COURSE_FULFILLED",payload:jsonToArray(snapshot.val())[0]})
            }else{
                dispatch({type:"FETCH_A_COURSE_REJECTED",payload:"payload is null"})
            }
        },function(errorObject){
            dispatch({type:"FETCH_A_COURSE_REJECTED",payload:errorObject.code})
        })
    }
}

export function saveACourse(courseName) {
    return function(dispatch) {
        dispatch({type: "SAVE_A_COURSE",payload: courseName})
    }
}

