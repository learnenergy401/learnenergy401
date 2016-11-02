import firebase from 'firebase';
import {FIREBASE_CONFIG} from '../../firebase.config.js';
import ComponentUpload from './ComponentUpload.js';

export const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG,'LearnEnergy');
export const firebaseAuth = firebaseApp.auth();
export const firebaseDb = firebaseApp.database();
export const firebaseStorage = firebaseApp.storage().ref();

export const firebaseApp2 = firebase.initializeApp(FIREBASE_CONFIG);
export const firebaseAuthInstance = firebaseApp2.auth();

import { connect } from "react-redux"
import { fetchUsers,getCurrentUser } from "./Actions/userActions"


var FirebaseTools = {

    checkAuth: () => {
        firebaseAuth.onAuthStateChanged(function(user) {
            if (user) {
//                console.log("logged in 1");
            } else {
//                console.log("not logged in 1");
            }
        });
    },


  //0: purchaser; 1: vendor; 2: additional user; 3: admin
	registerPurchaser: (user) => {
        firebaseDb.ref('PurchaserSignup').push({
            email: user.email,
            password: user.password,
            legalEntity: user.legalEntity,
            operatingName: user.operatingName,
            address1: user.address1,
            address2: user.address2,
            city: user.city,
            province: user.province,
            country: user.country,
            postalCode: user.postalCode,
            phone: user.phone,
            fax: user.fax,
            adminContact: user.adminContact,
            technicalContact: user.technicalContact,
            ISnumber: user.ISnumber,
            website: user.website,
            role: 0
        });
		alert("Thank you for registering as a Purchaser for LearnEnergy Marketplace." +"\n" + "We will be in contact with you shortly.");
	},

  //0: purchaser; 1: vendor; 3: additional user; 4: admin
  registerVendor: (user) => {
        firebaseDb.ref('VendorSignup').push({
            email: user.email,
            password: user.password,
            legalEntity: user.legalEntity,
            operatingName: user.operatingName,
            address1: user.address1,
            address2: user.address2,
            city: user.city,
            province: user.province,
            country: user.country,
            postalCode: user.postalCode,
            phone: user.phone,
            fax: user.fax,
            adminContact: user.adminContact,
            technicalContact: user.technicalContact,
            ISnumber: user.ISnumber,
            website: user.website,

            owners: user.owners,
            natureBusiness: user.natureBusiness,
            timeBusiness: user.timeBusiness,
            proAffiliation: user.proAffiliation,
            bank: user.bank,
            bonding: user.bonding,
            bondingLimit: user.bondingLimit,
            insurance: user.insurance,
            bankruptcy: user.bankruptcy,
            numEmployees: user.numEmployees,

            role: 1
        });
    alert("Thank you for registering as a Vendor for LearnEnergy Marketplace." +"\n" + "We will be in contact with you shortly.");
  },

  //0: purchaser; 1: vendor; 2: additional user; 3: admin
	registerAD: (user) => {
        firebaseDb.ref('ADSignup').push({
            website: user.website,
            email: user.email,
            password: user.password,
            role: 2
        });
		alert("Thank you for registering as a Purchaser for LearnEnergy Marketplace." +"\n" + "We will be in contact with you shortly.");
	},



	loginUser: (user) => {
		firebaseAuth.signInWithEmailAndPassword(user.email, user.pw);
        console.log('User signed in!');

		// Until we can link to a homepage that doesn't look the same as when you are not signed in
		alert("You have signed in:" +"\n" + user.email);

	},

	logoutUser: () => {
		firebaseAuth.signOut();
		console.log('User logged out!');
        alert("You have logged out. See you later.");
	},

    //function fo vendor upload demo
    vendorUpload: function(fileObj){
        var url='';
        firebaseAuth.signInAnonymously();
        firebaseStorage.child('vendors/'+fileObj.fileName).put(fileObj.file,fileObj.metadata).then(function(snapshot){
        //use then() to avoid asynchronous case
        url = snapshot.metadata.downloadURLs[0];
        document.getElementById('linkbox').innerHTML = '<a href="' + url + '">Click For File</a>';
        console.log('Upload successfully');
        }).catch(function(error) {
        console.error('Upload failed:', error);
      });;
    },

}

export default FirebaseTools;
