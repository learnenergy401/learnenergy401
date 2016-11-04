import React, { Component } from 'react'
import {Button} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

var buttonStyle = {
    marginLeft:'2dp!important'
}
class ButtonAdmin extends Component {
    render(){
        return(
          <Link to={this.props.to}>
              <Button style={buttonStyle} className="mdl-color-text--indigo" >
                ADMIN PANEL
              </Button>
           </Link>
        );}
};


export default ButtonAdmin