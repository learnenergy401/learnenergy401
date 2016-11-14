import React, { Component } from 'react'
import LearnHeader from './Header.js'
import { Textfield,Grid,Cell,Card,CardText, CardActions, Button } from 'react-mdl';
import FirebaseTools from './Firebase.js'

class ComponentUpload extends Component {
    /**
     * grabs the filename, file and metadata: then uploads to firebase
     * @param {object} evt - handles the event when onClick is pressed
     */
    handleFileSelect(evt) {
      evt.stopPropagation();
      evt.preventDefault();
      var file = evt.target.files[0];
      var fileName = file.name;
      var metadata = {
        'contentType': file.type
      };
      FirebaseTools.vendorUpload({fileName,file,metadata});
    }
    /* kept for later usage
    init() {
      document.getElementById('file').addEventListener('change', this.handleFileSelect());
      document.getElementById('file').disabled = false;
      auth.onAuthStateChanged(function(user) {
        if (user) {
          console.log('Anonymous user signed-in.', user);
          document.getElementById('file').disabled = false;
        } else {
          console.log('There was no anonymous session. Creating a new anonymous user.');
          // Sign the user in anonymously since accessing Storage requires the user to be authorized.
          auth.signInAnonymously();
        }
      });
    }
    */

    /**
      * Loads the card interface for the vendor
      * @return {html} - returns button and file
      */
    render(){
        return(
    <div className="learn-content mdl-typography--text-center">
    <div className="logo-font learn-slogan"></div>
    <a name="top" />
    <div className="learn-content mdl-typography--text-center" style={{width: '80%', margin: 'auto'}}>
        <div className="grid">
        <div className="card mdl-shadow--2dp">
          <div className="card__title mdl-color--light-blue-600 mdl-color-text--white">
            <h2 className="card__title-text">Vendor upload test</h2>
          </div>
          <div className="card__supporting-text mdl-color-text--white-600" id="messagesDiv">
            <h6>Choose File to upload</h6>
            <input type="file" id="file" name="file" onChange={this.handleFileSelect}/>
            <h6>File review URL:</h6>
            <span id="linkbox"></span>
          </div>
            </div>
      </div>
    </div>
  </div>
        );
    }
};

export default ComponentUpload
