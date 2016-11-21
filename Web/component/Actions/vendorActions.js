vendorimport {firebaseApp,firebaseAuth,firebaseDb, firebaseStorage} from '../Firebase'

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



