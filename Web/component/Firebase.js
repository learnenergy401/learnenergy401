import firebase from 'firebase';
import {FIREBASE_CONFIG} from '../../firebase.config.js';
import ComponentUpload from './ComponentUpload.js';

export const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG,'LearnEnergy');
export const firebaseAuth = firebaseApp.auth();
export const firebaseDb = firebaseApp.database();
export const firebaseStorage = firebaseApp.storage().ref();

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
    
     getUser: () => {

        firebaseDb.ref('SignUpList').once("value").then(function(snapshot){
            var result=snapshot.val();
            console.log(result+'1');

            return result;
        });
    },
    
	registerUser: (user) => {
        var num = 0;
        console.log(num);
        firebaseDb.ref('SignUpList').once('value').then(function(snapshot){
            
            num = snapshot.numChildren();
            console.log("number is", num);
            firebaseDb.ref('SignUpList').child(num).set({
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
                website: user.website
            });
        });
		

		alert("Thank you for registering for LearnEnergy Marketplace." +"\n" + "We will be in contact with you shortly.");
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

		

