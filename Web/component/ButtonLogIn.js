import React, { Component } from 'react'
import {Button} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

var buttonStyle = {
    marginLeft:'2dp!important'
}
class ButtonLogIn extends Component {
    render(){
        return(
          <Link to={this.props.to}>
              <Button style={buttonStyle} className="mdl-color-text--indigo" >
                LOG IN
              </Button>
           </Link>
        );}
};


export default ButtonLogIn