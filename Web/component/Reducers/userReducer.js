/**
 * User Reducer
 * @exports {state} reducer
 * @param {object} action
 * @return {state} state
 */
export default function reducer(state={
    vendorList:[],
    user: null,
    users: null,
    userName: null,
    fetching: false,
    fetched: false,
    error: null,
    isLoggedIn:false,
    notification:null,
    role: -1,
    purchasers: null,
    vendors: null,
    ad: null,
    admin: null, 
    keys_roles: null,
    eoi: null,
    eoiKey: null,
    reqEOI: null,
    rfp: null,
    rfpKey: null,
    rfp_from_eoi: null,
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
            password: "loading",
            
            // different variables for purchasers
            gstReg: "loading",
            billAddress1:"loading",
            billAddress2:"loading",
            billCity:"loading",
            billProvince:"loading",
            billCountry:"loading",                     
            billPostalCode:"loading",
            accntRec: "loading",
            jointVenture: "loading",                     
                                 
    },
    profile:{
        role:-1,
        firstName: null,
        // *TODO*
        // add more attribute here in model
        // null as default, i copie role into outer scope for convenience :)
    },
  }, action) {

    switch (action.type) {

        case "FETCH_USER": {
            return {...state,
                fetching: true}
        }

        case "FETCH_USER_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }

        case "FETCH_USER_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                user: action.payload,
                isLoggedIn: action.isLoggedIn,
                editProfile: action.payload
            }
        }

        case "FETCH_PURCHASER_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                purchasers: action.payload,
            }
        }

        case "FETCH_VENDOR_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                vendors: action.payload,
            }
        }

        case "FETCH_AD_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                ad: action.payload,
            }
        }

        // returns the admin information 
        case "FETCH_ADMIN_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                admin: action.payload,
            }
        }

        case "SIGNUP_USER": {
            return {
                ...state,
                fetching: true,
            }
        }

        case "SIGNUP_USER_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched:true,
            }
        }

        case "SIGNUP_USER_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }

        case "UPDATE_USER_PROFILE": {
            return {
                ...state,
                fetching: true,
            }
        }

        case "UPDATE_USER_PROFILE_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched:true,
            }
        }

        case "UPDATE_USER_PROFILE_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }

        case "FETCH_USER_PROFILE": {
            return {
                ...state,
                fetching: true,
            }
        }

        case "FETCH_USER_PROFILE_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched:true,
                isLoggedIn:true,
                user: action.payload,
                profile:action.payload,
                role: action.payload.role,
            }
        }

        case "FETCH_USER_PROFILE_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }

        case "LOGIN_USER": {
            return {
                ...state,
                fetching: true,
            }
        }

        case "LOGIN_USER_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched:true,
                user: action.payload,
                userName: action.payload.email,
                isLoggedIn:true,
            }
        }

        case "LOGIN_USER_REJECTED": {
            return {
                ...state,
                fetching: false,
                isLoggedIn: false,
                error: action.payload
            }
        }

        case "LOGOUT_USER": {
            return {
                ...state,
                fetching: true,
                fetched: false,
            }
        }

        case "LOGOUT_USER_FULFILLED": {
            return{
                ...state,
                fetching: false,
                fetched: true,
                user: null,
                role: null,
                isLoggedIn: false,
                purchasers: null,
                vendors: null,
                ad: null,
            }
        }

        case "LOGOUT_USER_REJECTED": {
            return {
                ...state,
                fetching: false,
                isLoggedIn: true,
                error: action.payload
            }
        }

        case "FETCH_KEYS_ROLES_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                keys_roles: action.payload,
            }
        } 

        case "FETCH_KEYS_ROLES_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload,
            }
        }

        case "STORE_KEYS_ROLES_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetching: true,
            }
        }

        case "STORE_KEYS_ROLES_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload,
            }
        }

        case "STORE_EOI_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched:true,                
            }
        }

        case "STORE_EOI_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }

        case "FETCH_EOI_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                eoi: action.payload,
            }
        } 

        case "FETCH_EOI_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload,
            }
        }

        case "STORE_REQ_EOI_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched:true,                
            }
        }

        case "STORE_REQ_EOI_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }

        case "FETCH_REQ_EOI_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                reqEOI: action.payload,
            }
        } 

        case "FETCH_REQ_EOI_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload,
            }
        }

        case "STORE_EOI_KEY_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched:true,                
            }
        }

        case "STORE_EOI_KEY_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }

        case "FETCH_EOI_KEY_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                eoiKey: action.payload,
            }
        } 

        case "FETCH_EOI_KEY_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload,
            }
        }

        case "REMOVED_EOI_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
            }
        }

        case "REMOVED_RFP_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
            }
        }   

        case "FETCH_RFP_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                rfp: action.payload,
            }
        } 

        case "FETCH_RFP_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload,
            }
        }

        case "STORE_RFP_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched:true,                
            }
        }

        case "STORE_RFP_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }

        case "FETCH_RFP_FROM_EOI_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                rfp_from_eoi: action.payload,
            }
        }

        case "FETCH_RFP_FROM_EOI_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload,
            }
        }

        case "STORE_RFP_FROM_EOI_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched:true,                
            }
        }

        case "STORE_RFP_FROM_EOI_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }

        case "FETCH_USERS_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                users: action.payload,
            }
        }

        case "FETCH_USERS_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload,
            }
        }

        case "STORE_RFP_KEY_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched:true,   
            }
        }

        case "STORE_RFP_KEY_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }

        case "FETCH_RFP_KEY_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                rfpKey: action.payload
            }  
        }

        case "FETCH_RFP_KEY_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }  
        }

        case "UPDATE_RFP": {
            return {
                ...state,
                fetching: false,
                fetched:true,
            }
        }

        case "UPDATE_RFP_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched:true,   
            }
        }
        
        case "UPDATE_RFP_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }

        case "FETCH_NOTIFICATION_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                notification: action.payload,
            }
        }

        case "FETCH_NOTIFICATION_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }      
        }

        case "SET_NOTIFICATION_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched:true,   
            }           
        } 

        case "SET_NOTIFICATION_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }
    }

    return state
}
