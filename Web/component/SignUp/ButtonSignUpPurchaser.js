import React, { Component } from 'react'
import {Button} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

var divStyle = {
    order: 3,
    WebkitTransition: 'all', 
    msTransition: 'all' 
}

class ButtonSignUpPurchaser extends Component {
    render(){
        return(
          <Link to={this.props.to}>
              <Button raised ripple accent className="mdl-color--indigo mdl-color-text--white" >
                Purchaser
              </Button>
           </Link>
        );}
};


export default ButtonSignUpPurchaser