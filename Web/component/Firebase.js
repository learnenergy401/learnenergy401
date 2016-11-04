import firebase from 'firebase';
import {FIREBASE_CONFIG} from '../../firebase.config.js';
import ComponentUpload from './ComponentUpload.js';

/**
 * Initializes the firebase App 
 * @returns {object} firebaseApp - Returns instance of firebase.
 */
export const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG,'LearnEnergy');

/**
 * Auth of firebaseApp 
 * @returns {object} firebaseAuth - Returns auth instance of firebase.
 */
export const firebaseAuth = firebaseApp.auth();

/**
 * Db of firebaseApp
 * @returns {object} firebaseDb - Returns db instance of firebase.
 */
export const firebaseDb = firebaseApp.database();

/**
 * Storage of firebaseApp 
 * @returns {object} firebaseStorage - Returns storage instance of firebase.
 */
export const firebaseStorage = firebaseApp.storage().ref();

/**
 * Initializes a second instance of firebase App 
 * @returns {object} firebaseApp2 - Returns instance of firebase.
 */
export const firebaseApp2 = firebase.initializeApp(FIREBASE_CONFIG);

/**
 * Auth of firebaseApp2
 * @returns {object} firebaseAuth2 - Returns second auth instance of firebase.
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

export default FirebaseTools;
