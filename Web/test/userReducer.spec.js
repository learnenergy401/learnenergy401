import reducer from "../component/Reducers/userReducer.js"
import expect from "expect"


describe('user reducer', () => {
  	it('should handle initial state', () => {
	    expect(
	      reducer(undefined, {})
	    ).toEqual({ad: null,
	     error: null,
	     fetched: false,
	     fetching: false,
	     isLoggedIn: false,
	     profile:{
	     	firstName: null,
	     	role: null 
	     },
	     purchasers: null,
	     role: null,
	     user: null,
	     userName: null,
	     vendors: null})
  	})

	it('should handle FETCH_USER', () => {
	    expect(
	      reducer([], {
	        type: 'FETCH_USER',
	      })
	    ).toEqual(
	      {
	        fetching: true
	      }
	   )
	})

	it('should handle FETCH_USER_REJECTED', () => {
	    expect(
	      reducer([], {
	        type: 'FETCH_USER_REJECTED',

	      })
	    ).toEqual({
	        fetching: false,
	        error: undefined,
	    })
	})

	it('should handle FETCH_USER_FULFILLED', () => {
	    expect(
	      reducer([], {
	        type: 'FETCH_USER_FULFILLED',
	      })
	    ).toEqual({
	        fetching: false,
	        fetched: true,
	        user: undefined,
	        isLoggedIn: undefined
	    })
	})

	it('should handle FETCH_PURCHASER_FULFILLED', () => {
	    expect(
	      reducer([], {
	        type: 'FETCH_PURCHASER_FULFILLED',

	      })
	    ).toEqual({
	        fetching: false,
            fetched: true,
	        purchasers: undefined,
	        isLoggedIn: undefined
	    })
	})


	it('should handle FETCH_VENDOR_FULFILLED', () => {
	    expect(
	      reducer([], {
	        type: 'FETCH_VENDOR_FULFILLED',

	      })
	    ).toEqual({
	        fetching: false,
            fetched: true,
	        vendors: undefined,
	        isLoggedIn: undefined
	    })
	})

	it('should handle FETCH_AD_FULFILLED', () => {
	    expect(
	      reducer([], {
	        type: 'FETCH_AD_FULFILLED',

	      })
	    ).toEqual({
	        fetching: false,
            fetched: true,
	        ad: undefined,
	        isLoggedIn: undefined
	    })
	})


	it('should handle SIGNUP_USER', () => {
	    expect(
	      reducer([], {
	        type: 'SIGNUP_USER',

	      })
	    ).toEqual({
	        fetching: true,
	    })
	})

	it('should handle SIGNUP_USER_FULFILLED', () => {
	    expect(
	      reducer([], {
	        type: 'SIGNUP_USER_FULFILLED',

	      })
	    ).toEqual({
	        fetching: false,
            fetched: true,
	    })
	})

	it('should handle SIGNUP_USER_REJECTED', () => {
	    expect(
	      reducer([], {
	        type: 'SIGNUP_USER_REJECTED',

	      })
	    ).toEqual({
	        fetching: false,
            error: undefined
	    })
	})

	it('should handle UPDATE_USER_PROFILE', () => {
	    expect(
	      reducer([], {
	        type: 'UPDATE_USER_PROFILE',

	      })
	    ).toEqual({
	        fetching: true,
	    })
	})


	it('should handle UPDATE_USER_PROFILE_REJECTED', () => {
	    expect(
	      reducer([], {
	        type: 'UPDATE_USER_PROFILE_REJECTED',

	      })
	    ).toEqual({
	        fetching: false,
	        error: undefined,
	    })
	})

	it('should handle FETCH_USER_PROFILE', () => {
	    expect(
	      reducer([], {
	        type: 'FETCH_USER_PROFILE',

	      })
	    ).toEqual({
	        fetching: true,
	    })
	})

	it('should handle FETCH_USER_PROFILE_REJECTED', () => {
	    expect(
	      reducer([], {
	        type: 'FETCH_USER_PROFILE_REJECTED',

	      })
	    ).toEqual({
	        fetching: false,
	        error: undefined,
	    })
	})

	it('should handle LOGIN_USER', () => {
	    expect(
	      reducer([], {
	        type: 'LOGIN_USER',

	      })
	    ).toEqual({
	        fetching: true,
	    })
	})

	it('should handle LOGOUT_USER', () => {
	    expect(
	      reducer([], {
	        type: 'LOGOUT_USER',

	      })
	    ).toEqual({
	        fetching: true,
            fetched: false,
	    })
	})

	it('should handle LOGOUT_USER_FULFILLED', () => {
	    expect(
	      reducer([], {
	        type: 'LOGOUT_USER_FULFILLED',

	      })
	    ).toEqual({
	        fetching: false,
            fetched: true,
            user: null,
            role: null,
            isLoggedIn: false,
            purchasers: null,
            vendors: null,
            ad: null,
	    })
	})

	it('should handle LOGOUT_USER_REJECTED', () => {
	    expect(
	      reducer([], {
	        type: 'LOGOUT_USER_REJECTED',

	      })
	    ).toEqual({
	        fetching: false,
            isLoggedIn: true,
            error: undefined
	    })
	})

})