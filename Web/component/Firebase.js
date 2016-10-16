import firebase from 'firebase';
import {FIREBASE_CONFIG} from '../../firebase.config.js';

export const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
export const firebaseAuth = firebaseApp.auth();
export const firebaseDb = firebaseApp.database();

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

}

export default FirebaseTools;
