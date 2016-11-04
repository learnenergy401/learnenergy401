import reducer from "../component/Reducers/userReducer.js"
import expect from "expect"


describe('user reducer', () => {
  	it('should handle initial state', () => {
	    expect(
	      reducer(undefined, {})
	    ).toEqual({
	    	user: null,
		    userName:null,
		    fetching: false,
		    fetched: false,
		    error: null,
		    isLoggedIn:false,
		    role: null,
		    purchasers: null,
		    vendors: null,
		    ad: null,
		    editProfile:{
		            legalEntity: "loading",
		            operatingName: "loading",
		            address1: "loading",
		            address2: "loading",
		            city: "loading",
		            province: "loading",
		            country: "loading",
		            postalCode: "loading",
		            phone: "loading",
		            fax: "loading",

		            owner1Name: "loading",
		            owner1Pos: "loading",

		            natureBusiness: "loading",
		            timeBusiness: "loading",
		            proAffiliation: "loading",
		            report:"loading",

		            bank: "loading",
		            bankLocation: "loading",
		            bonding: "loading",
		            bondingLocation: "loading",
		            insuranceCompany: "loading",
		            insuranceLocation:"loading",
		            bondingLimitDate: "loading",
		            bondingLimit: "loading",
		            grossBus: "loading",
		            grossBusYear: "loading",
		            bankruptcy:"loading",

		            numEmployees: "loading",
		            AD1address1: "loading",
		            AD1address2: "loading",
		            AD1city: "loading",
		            AD1province: "loading",
		            AD1country: "loading",
		            AD1postalCode: "loading",
		            AD1phone: "loading",

		            categories: "loading",
		            specialties: "loading",

		            client1: "loading",
		            client1Location: "loading",
		            client1Phone: "loading",
		            client1Email: "loading",

		            licence1: "loading",
		            licence1Location: "loading",
		            insurer1: "loading",  policyLimit1: "loading",  expiry1: "loading",
		            insurer2: "loading",  policyLimit2: "loading",  expiry2: "loading",
		            insurer3: "loading",  policyLimit3: "loading",  expiry3: "loading",
		            insurer4: "loading",  policyLimit4: "loading",  expiry4: "loading",
		            insurer5: "loading",  policyLimit5: "loading",  expiry5: "loading",
		            insurer6: "loading",  policyLimit6: "loading",  expiry6: "loading",
		            insurer7: "loading",  policyLimit7: "loading",  expiry7: "loading",
		            insurer8: "loading",  policyLimit8: "loading",  expiry8: "loading",
		            insurer9: "loading",  policyLimit9: "loading",  expiry9: "loading",
		            insurer10: "loading",  policyLimit10: "loading",  expiry10: "loading",
		            insurer11: "loading",  policyLimit11: "loading",  expiry11: "loading",
		            insurer12: "loading",  policyLimit12: "loading",  expiry12: "loading",
		            insurer13: "loading",  policyLimit13: "loading",  expiry13: "loading",
		            insurer14: "loading",  policyLimit14: "loading",  expiry14: "loading",
		            insurer15: "loading",  policyLimit15: "loading",  expiry15: "loading",

		            EHWcurrentYear: "loading",  EHWpreviousYear1: "loading",  EHWpreviousYear2: "loading",  EHWpreviousYear3: "loading",
		            FcurrentYear: "loading",  FpreviousYear1: "loading",  FpreviousYear2: "loading",  FpreviousYear3: "loading",
		            LTIcurrentYear: "loading",  LTIpreviousYear1: "loading",  LTIpreviousYear2: "loading",  LTIpreviousYear3: "loading",
		            MAIcurrentYear: "loading",  MAIpreviousYear1: "loading",  MAIpreviousYear2: "loading",  MAIpreviousYear3: "loading",
		            ORCcurrentYear: "loading",  ORCpreviousYear1: "loading", ORCpreviousYear2: "loading",  ORCpreviousYear3: "loading",
		            TRIcurrentYear: "loading",  TRIpreviousYear1: "loading",  TRIpreviousYear2: "loading",  TRIpreviousYear3: "loading",

		            IRcurrentYear: "loading",  IRpreviousYear1: "loading",  IRpreviousYear2: "loading",  IRpreviousYear3: "loading",
		            PRcurrentYear: "loading",  PRpreviousYear1: "loading",  PRpreviousYear2: "loading",  PRpreviousYear3: "loading",
		            PDcurrentYear: "loading",  PDpreviousYear1: "loading",  PDpreviousYear2: "loading",  PDpreviousYear3: "loading",
		            PScurrentYear: "loading",  PSpreviousYear1: "loading",  PSpreviousYear2: "loading",  PSpreviousYear3: "loading",

		            drugPolicy: "loading",
		            subcontractors: "loading",
		            stopWorkOrder: "loading",

		            email: "loading",
		            adminContact: "loading",
		            technicalContact: "loading",

		            ISnumber:"loading",

		            website: "loading",
		            password: "loading"},
    
    profile:{
        role:null,
        firstName: null,
        // *TODO*
        // add more attribute here in model
        // null as default, i copie role into outer scope for convenience :)
    }
  	})})

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
	        isLoggedIn: undefined,
	        editProfile: undefined
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