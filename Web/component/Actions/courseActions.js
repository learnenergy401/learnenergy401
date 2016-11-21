import {firebaseApp,firebaseAuth,firebaseDb, firebaseStorage} from '../Firebase'

/**
 * converts json into an array
 * @param {object} json - pushes object into array
 * @returns {list} arr - Returns array of json objects
 */
function jsonToArray(json){
        var arr = [];
        for (var prop in json) {
            arr.push(json[prop]);
        }
        return arr
    }

/**
 * adds purchasers to coursePurchasers
 * @param {object} info, courseID - information on course and purchaser id
 * @throws {object} err - Returns an error if failed to fetch from database.
 * @returns {object} dispatch 
 */
export function addCoursePurchaser(info, courseID) {
    return function(dispatch) {
        dispatch({type: "ADDING_PURCHASER"})

        var purchasers = []
        if (info.coursePurchasers != null) {
            for (var count=0; count<info.coursePurchasers.length; count++) {
                // just keep unique purchasers 
                var unique = true
                for (var i=0; i<purchasers.length; i++) {
                    if (info.coursePurchasers[count] == purchasers[i]) {
                        unique = false
                    }
                }
                if (unique) {
                    purchasers.push(info.coursePurchasers[count])
                }
            }
        }

        var unique = true
        for (var count=0; count<purchasers.length; count++) {
            if (info.purchaserToAdd == purchasers[count]) {
                unique = false
            } 
        }
        if (unique) {
            purchasers.push(info.purchaserToAdd)
        }

        firebaseDb.ref('Course/' + courseID).set({
            courseDescription: info.courseDescription,
            courseID: info.courseID,
            courseName: info.courseName,
            courseVendorEmail: info.courseVendorEmail,
            courseVideoId: info.courseVideoId,
            coursePurchasers: purchasers
        }).then((data) => {
            dispatch({type: "UPDATE_COURSE_FULFILLED"})
        }).catch((err) => {
            dispatch({type: "UPDATE_COURSE_REJECTED", payload: err.code})
        })
    }
}

/**
 * Grabs the courses from the course child in the database.
 * @returns {object} courses - Returns the object of courses.
 * @throws {object} err - Returns an error if failed to fetch from database.
 */
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

/**
 * Upload a course into the database.
 * @param {object} course - object containing course info
 * @returns {object} courses - Returns the object of courses.
 * @throws {object} err - Returns an error if failed to fetch from database.
 */
export function uploadCourse(course) {
    return function(dispatch) {
        dispatch({type: "UPLOAD_COURSE"})
        var pushID = generatePushID()
        course.courseID = pushID
        course.courseFiles = ['0']


        firebaseDb.ref('Course/'+course.courseID).set(course)
            .then((data) => {
                dispatch({type: "UPLOAD_COURSE_FULFILLED"})
            })
            .catch((err) => {
                dispatch({type: "UPLOAD_COURSE_REJECTED", payload: err.code})
            })
                        
    }
}

/**
 * updates course
 * @param {object} course, courseID - information on course
 * @throws {object} err - Returns an error if failed to fetch from database.
 * @returns {object} dispatch 
 */
export function updateCourse(course,courseID) {
    return function(dispatch) {
        dispatch({type: "UPDATE_COURSE"})
        

        firebaseDb.ref('Course/'+courseID).set(course)
            .then((data) => {
                dispatch({type: "UPDATE_COURSE_FULFILLED"})
            })
            .catch((err) => {
                dispatch({type: "UPDATE_COURSE_REJECTED", payload: err.code})
            })
                        
    }
}

export function uploadCourseFiles(courseID,coursePrev,fileObj) {
    return function(dispatch) {
        dispatch({type:"UPLOAD_COURSE_FILES"})
        firebaseStorage.child(courseID+'/'+fileObj.fileName).put(fileObj.file,fileObj.metadata)
            .then((snapshot) =>{
                var url = snapshot.metadata.downloadURLs[0];
                var tempList = coursePrev.courseFiles;
                if(tempList[0]=='0'){
                    var courseFiles = [url]
                }else{
                    var courseFiles = [...tempList,url]
                }
                if(coursePrev.coursePurchasers!=null){
                firebaseDb.ref('Course/'+courseID).set({
                    courseDescription:coursePrev.courseDescription,
                    courseID:coursePrev.courseID,
                    courseName:coursePrev.courseName,
                    courseVendorEmail:coursePrev.courseVendorEmail,
                    courseVideoId:coursePrev.courseVideoId,
                    coursePurchasers:coursePrev.coursePurchasers,
                    courseFiles:courseFiles
                });
                }else{
                firebaseDb.ref('Course/'+courseID).set({
                    courseDescription:coursePrev.courseDescription,
                    courseID:coursePrev.courseID,
                    courseName:coursePrev.courseName,
                    courseVendorEmail:coursePrev.courseVendorEmail,
                    courseVideoId:coursePrev.courseVideoId,
                    courseFiles:courseFiles
                    });
                }
            
                dispatch({type:"UPLOAD_COURSE_FILES_FULFILLED"})
            }).catch((err) => {
                dispatch({type: "UPLOAD_COURSE_FILES_REJECTED", payload:err})
            })
    }
}   
    
/*------not using yet-----*/
export function uploadCourseDetail(user,fileObj) {
    return function(dispatch) {
        dispatch({type: "UPLOAD_COURSE_DETAIL"})
        firebaseStorage.child(user.email+fileObj.fileName).put(fileObj.file,fileObj.metadata)
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


/**
 * Grabs the vendor courses from the Vendor Course in the database.
 * @param {object} email - object containing email
 * @returns {object} currentVendorCourseList - Returns the object of courses.
 * @throws {object} err - Returns an error if failed to fetch from database.
 */

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

/**
 * Grabs the courses from the CourseList in the database.
 * @returns {object} courseList - Returns the object of courseList.
 * @throws {object} err - Returns an error if failed to fetch from database.
 */
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

/**
 * Grabs the courseName from the Course in the database.
 * @param {object} courseName - Object containing course names
 * @returns {object} aCourseName - Returns the object aCourseName
 * @throws {object} err - Returns an error if failed to fetch from database.
 */
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

/**
 * Saves a course to the database.
 * @param {object} courseName - Object containing course names
 * @returns {object} courseName - Returns the object containing course names.
 * @throws {object} err - Returns an error if failed to fetch from database.
 */
export function saveACourse(courseName) {
    return function(dispatch) {
        dispatch({type: "SAVE_A_COURSE",payload: courseName})
    }
}

