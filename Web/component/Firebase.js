import firebase from 'firebase';
import {FIREBASE_CONFIG} from '../../firebase.config.js';
import ComponentUpload from './ComponentUpload.js';

export const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG,'LearnEnergy');
export const firebaseAuth = firebaseApp.auth();
export const firebaseDb = firebaseApp.database();
export const firebaseStorage = firebaseApp.storage().ref();


var FirebaseTools = {

	registerUser: (user) => {
		firebaseDb.ref('SignUpList').push({
			email: user.email,
			password: user.pw
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

		

