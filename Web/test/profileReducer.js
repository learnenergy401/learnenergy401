import reducer from "../component/Reducers/profileReducer.js"
import expect from "expect"


describe('profile reducer', () => {
  	it('should handle initial state', () => {
	    expect(
	     	reducer(undefined, {})
	    ).toEqual({
	     	menu:0
  		})
	})

	it('should handle CHANGE_MENU', () => {
	    expect(
	      reducer([], {
	        type: 'CHANGE_MENU',
	      })
	    ).toEqual(
	      {
	        menu: undefined
	      }
	   )
	})


})