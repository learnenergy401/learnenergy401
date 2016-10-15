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
	},

	loginUser: (user) => {
		firebaseAuth.signInWithEmailAndPassword(user.email, user.pw);
        console.log('User signed in!');
	},

	logoutUser: () => {
		firebaseAuth.signOut();
		console.log('User logged out!');
	},

}

export default FirebaseTools;