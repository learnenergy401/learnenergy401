import firebase from 'firebase';
import {FIREBASE_CONFIG} from '../../firebase.config.js';
import ComponentUpload from './ComponentUpload.js';

/**
 * Initializes the firebase App
 * @ignore
 */
export const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG,'LearnEnergy');

/**
 * Auth of firebaseApp
 * @ignore
 */
export const firebaseAuth = firebaseApp.auth();

/**
 * Db of firebaseApp
 * @ignore
 */
export const firebaseDb = firebaseApp.database();

/**
 * Storage of firebaseApp
 * @ignore
 */
export const firebaseStorage = firebaseApp.storage().ref();

/**
 * Storage of firebaseApp for own refs
 * @ignore
 */
export const firebaseStorageNorm = firebaseApp.storage();

/**
 * Initializes a second instance of firebase App
  * @ignore
  */
export const firebaseApp2 = firebase.initializeApp(FIREBASE_CONFIG);

/**
 * Auth of firebaseApp2
  * @ignore
  */
export const firebaseAuthInstance = firebaseApp2.auth();

import { connect } from "react-redux"
import { fetchUsers,getCurrentUser } from "./Actions/userActions"


var FirebaseTools = {
    /**
    * used for uploading files, gives a url for the file
    * @param {object} url - returns the url of the file
    * @return {object} error - returns error if it cannot upload file
    */
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

/**
 * Exports firebaseTools
 * @ignore
 */
export default FirebaseTools;
