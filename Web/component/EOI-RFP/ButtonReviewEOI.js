import React, { Component } from 'react'
import {Button} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

var buttonStyle = {
  width: '150px',
  marginLeft:'0px'
}
class ButtonReviewEOI extends Component {
    /**
    * Loads the button for Admin.
    * @return {html} - returns button and links
    */
    render(){
        return(
          <Link to={this.props.to}>
              <Button style={buttonStyle} className="mdl-color-text--indigo" >
                EOIs/RFPs
              </Button>
           </Link>
        );}
};


export default ButtonReviewEOI
