/**
 * Course Reducer
 * @exports {state} reducer
 * @param {object} action
 * @return {state} state
 */
export default function reducer(state={
    courseList: null,
    currentVendorCourseList: null,
    fetching: false,
    error: null,
    aCourse: "Loading...",
    aCourseName:"Loading...",
    uploaded: false,

    courseName:null,
    courseDescription: null,
    courseVendorEmail: null,
    coursePurchasers: null,
  }, action) {

    switch (action.type) {

        case "FETCH_A_COURSE":{
            return {...state, 
                    fetching: true
            }
        }
        case "FETCH_A_COURSE_FULFILLED":{
            return {...state, 
                    fetching: false,
                    aCourse: action.payload,
            }
        }
        case "FETCH_A_COURSE_REJECTED":{
            return {...state, 
                    fetching:false,
                    error: action.payload,
            }
        }

        case "FETCH_COURSE": {
            return {...state, 
                    fetching: true
            }
        }
        case "FETCH_COURSE_FULFILLED": {
            return{...state, 
                    fetching: false,
                    courseList: action.payload,
            }
        }
        case "FETCH_COURSE_REJECTED": {
            return{...state, 
                    fetching: false,
                    error: action.payload,
            }
        }
        case "FETCH_VENDORS_COURSE": {
            return {...state, 
                    fetching: true
            }
        }
            
        case "FETCH_VENDORS_COURSE_FULFILLED": {
            return {...state, 
                    fetching: false,
                    currentVendorCourseList: action.payload
            }
        }
        case "FETCH_VENDORS_COURSE_REJECTED": {
            return {...state, 
                    fetching: false,
                    error: action.payload
            }
        }
        case "FETCH_COURSE_DETAIL": {
            return {...state, 
                    fetching: true
            }
        }    
        case "UPLOAD_COURSE": {
            return {...state, 
                    uploaded: false,
                    fetching: true
            }
        }
        case "UPLOAD_COURSE_FULFILLED": {
            return {...state,
                    uploaded:true,
                    fetching:false,
                
            }
        }
        case "UPDATE_COURSE": {
            return {...state, 
                    uploaded: true,
                    fetching: false
            }
        }
        case "UPDATE_COURSE_FULFILLED": {
            return {...state,
                    uploaded:true,
                    fetching:false,
                
            }
        }
        case "UPDATE_COURSE_REJECTED": {
            return {...state, 
                    fetching: false,
            }
        }   
        case "FETCH_COURSE_DETAIL_FULFILLED": {
            return{...state, 
                    fetching: false,
                    courseList: acion.payload,
            }
        }
        case "FETCH_COURSE_DETAIL_REJECTED": {
            return{...state, 
                    fetching: false,
                    error: acion.payload,
            }
        }    
        
        case "UPLOAD_COURSE_REJECTED": {
            return {...state, 
                    fetching: false,
            }
        }        
        case "UPLOAD_COURSE_FILES": {
            return {...state,
                    uploaded: false,
                    fetching: true           
            }
        }

        case "UPLOAD_COURSE_FILES_FULFILLED": {
            return {...state,
                    uploaded: true,
                    fetching: false,
            
            }
        }
        case "UPLOAD_COURSE_FILES_REJECTED": {
            return {...state,
                    fetching: false,
            
            }
        }      


        case "SAVE_A_COURSE": {
            return {...state,
                    aCourseName : action.payload
            }
        }

        case "ADDING_PURCHASER": {
            return {...state,
                uploaded:true,
                fetching: false,
            }
        }
        
        case "SORT_LIST": {
            return {...state,
                courseList: action.payload,
            }
        }

    }

    return state
}
