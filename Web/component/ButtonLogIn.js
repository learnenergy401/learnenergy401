import React, { Component } from 'react'
import {Button} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'


class ButtonLogIn extends Component {
    render(){
        return(
          <Link to={this.props.to}>
              <Button ripple accent className="mdl-color-text--indigo" >
                LOG IN
              </Button>
           </Link>
        );}
};


export default ButtonLogIn