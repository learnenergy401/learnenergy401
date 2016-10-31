export default function reducer(state={
    courseList: null,
    currentVendorCourseList: null,
    fetching: false,
    error: null,
    
    uploaded: false,
wo
    
  }, action) {

    switch (action.type) {
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
            
        case "UPLOAD_COURSE": {
            return {...state, 
                    uploaded: false,
                    fetching: true
            }
        }
            
        case "UPLOAD_COURSE_FULFILLED": {
            return {...state,
                    uploaded: true,
                    fetching: false,
            }
        }
        case "UPLOAD_COURSE_REJECTED": {
            return {...state, 
                    fetching: false,
            }
        }
        
    }

    return state
}
