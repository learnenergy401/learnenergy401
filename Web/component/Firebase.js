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
