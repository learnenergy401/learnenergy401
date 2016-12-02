import reducer from "../component/Reducers/courseReducer.js"
import expect from "expect"


describe('course reducer', () => {
  	it('should handle initial state', () => {
	    expect(
	     	reducer(undefined, {})
	    ).toEqual({
	     	courseList: null,
		    currentVendorCourseList: null,
		    fetching: false,
		    error: null,
		    aCourse: "Loading...",
		    aCourseName:"Loading...",
		    uploaded: false,
            coursePurchasers:null,
		    courseName:null,
		    courseDescription: null,
		    courseVendorEmail: null,})
  	})

	it('should handle FETCH_A_COURSE', () => {
	    expect(
	      reducer([], {
	        type: 'FETCH_A_COURSE',
	      })
	    ).toEqual(
	      {
	        fetching: true
	      }
	   )
	})

	it('should handle FETCH_A_COURSE_FULFILLED', () => {
	    expect(
	      reducer([], {
	        type: 'FETCH_A_COURSE_FULFILLED',
	      })
	    ).toEqual(
	      {
	        fetching: false,
	        aCourse: undefined
	      }
	   )
	})

	it('should handle FETCH_A_COURSE_REJECTED', () => {
	    expect(
	      reducer([], {
	        type: 'FETCH_A_COURSE_REJECTED',
	      })
	    ).toEqual(
	      {
	        fetching: false,
	        error: undefined
	      }
	   )
	})


	it('should handle FETCH_COURSE', () => {
	    expect(
	      reducer([], {
	        type: 'FETCH_COURSE',
	      })
	    ).toEqual(
	      {
	        fetching: true,
	      }
	   )
	})


	it('should handle FETCH_COURSE_FULFILLED', () => {
	    expect(
	      reducer([], {
	        type: 'FETCH_COURSE_FULFILLED',
	      })
	    ).toEqual(
	      {
	        fetching: false,
	        courseList: undefined
	      }
	   )
	})

	it('should handle FETCH_COURSE_REJECTED', () => {
	    expect(
	      reducer([], {
	        type: 'FETCH_COURSE_REJECTED',
	      })
	    ).toEqual(
	      {
	        fetching: false,
	        error: undefined
	      }
	   )
	})

	it('should handle FETCH_VENDORS_COURSE', () => {
	    expect(
	      reducer([], {
	        type: 'FETCH_VENDORS_COURSE',
	      })
	    ).toEqual(
	      {
	        fetching: true,
	      }
	   )
	})


	it('should handle FETCH_VENDORS_COURSE_FULFILLED', () => {
	    expect(
	      reducer([], {
	        type: 'FETCH_VENDORS_COURSE_FULFILLED',
	      })
	    ).toEqual(
	      {
	        fetching: false,
	        currentVendorCourseList: undefined
	      }
	   )
	})

	it('should handle FETCH_VENDORS_COURSE_REJECTED', () => {
	    expect(
	      reducer([], {
	        type: 'FETCH_VENDORS_COURSE_REJECTED',
	      })
	    ).toEqual(
	      {
	        fetching: false,
	        error: undefined
	      }
	   )
	})

	

    
    it('should handle UPDATE_COURSE', () => {
        expect(
            reducer([],{
                type: 'UPDATE_COURSE',
            })
        ).toEqual(
            {
                uploaded: true,
                fetching: false,
            }
        )
    })
    
    it('should handle UPDATE_COURSE_FULFILLED', () => {
	    expect(
	      reducer([], {
	        type: 'UPDATE_COURSE_FULFILLED',
	      })
	    ).toEqual(
	      	{
	        	uploaded: true,
                fetching: false,
	      	}
	   )
	})
    
    it('should handle UPDATE_COURSE_REJECTED', () => {
	    expect(
	      reducer([], {
	        type: 'UPDATE_COURSE_REJECTED',
	      })
	    ).toEqual(
	      {
	        fetching: false,
	      }
	   )
	})
    
	it('should handle SAVE_A_COURSE', () => {
	    expect(
	      reducer([], {
	        type: 'SAVE_A_COURSE',
	      })
	    ).toEqual(
	      {
	        aCourseName: undefined,
	      }
	   )
	})
    
    it('should handle UPLOAD_COURSE_FILES', () => {
	    expect(
	      reducer([], {
	        type: 'UPLOAD_COURSE_FILES',
	      })
	    ).toEqual(
	      {
	        uploaded: false,
            fetching: true
	      }
	   )
	})
    
    it('should handle UPLOAD_COURSE_FILES_FULFILLED', () => {
	    expect(
	      reducer([], {
	        type: 'UPLOAD_COURSE_FILES_FULFILLED',
	      })
	    ).toEqual(
	      {
	        uploaded: true,
            fetching: false
	      }
	   )
	})
    
    it('should handle UPLOAD_COURSE_FILES_REJECTED', () => {
	    expect(
	      reducer([], {
	        type: 'UPLOAD_COURSE_FILES_REJECTED',
	      })
	    ).toEqual(
	      {
            fetching: false
	      }
	   )
	})
    
         
})