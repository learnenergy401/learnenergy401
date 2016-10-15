import React, { Component } from 'react'
import LearnHeader from './Header.js'
import { Textfield,Grid,Cell,Card,CardText, CardActions, Button } from 'react-mdl';

class ComponentUpload extends Component {

    render(){
        return(
    <div  className="learn-content mdl-layout__content mdl-typography--text-center">
    <div className="logo-font learn-slogan">Upload Test</div>
    <div className="learn-content mdl-layout__content mdl-typography--text-center">
      <div className="mdl-grid">
        <div className="mdl-card mdl-shadow--2dp">
          <div className="mdl-card__title mdl-color--light-blue-600 mdl-color-text--white">
            <h2 className="mdl-card__title-text">Vendor upload test</h2>
          </div>
          <div className="mdl-card__supporting-text mdl-color-text--grey-600" id="messagesDiv">
            <h6>Choose File to upload</h6>
            <input type="file" id="file" name="file"/>
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