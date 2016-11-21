import React, { Component } from 'react';
import { Header, Layout, Textfield,Grid,Cell,Card,CardText, Content, CardTitle, CardActions, Button } from 'react-mdl';
import LearnHeader from './Header.js'
import LearnFooter from './Footer.js'

import LearnLogo from './Logo.js';
import LearnNavigation from './Navigation.js';
import store from './Store.js'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { connect } from "react-redux"

import { fetchUsers } from "./Actions/userActions"

var spacerStyle = {
    height: '50px',
    backgroundColor: '#f3f3f3',
    backgroundSize: 'cover'
}

var cardStyle = {
    width: '80%',
    margin: 'auto',
    height:'500px'
}

var cardTitleStyle = {
    height:'50px'
}


@connect((store) => {
  return {
    user: store.user
  };
})

class ADpage extends Component {

   /**
    * Fetches users
    * @returns {object} users - return users
    */
    fetchUsers() {
        this.props.dispatch(fetchUsers())
    }

   /**
    * Invoked immediately before a component is unmounted and destroyed, to update our states
    */
    componentWillMount(){
        this.fetchUsers()
    }

    render() {
        const {user} = this.props
        var list_of_ad = []
        console.log(user)

        if (user.users != null) {
            var keys = Object.keys(user.users) 
            for (var count=0; count<keys.length; count++) {
                if (user.users[keys[count]].role == 2) {
                    list_of_ad.push(user.users[keys[count]].website)
                    list_of_ad.push(<br/>)
                }
            }

            if (list_of_ad.length>=1) {
            return(
                <div>
                <LearnHeader/>

              <div  className="learn-content mdl-typography--text-center">
                  <div style={spacerStyle} />
                  <Card shadow={0} style={cardStyle} >
                    <CardTitle className="mdl-color--indigo mdl-color-text--white mdl-shadow--2dp">Additional Resources</CardTitle>

                <div style={{width: '80%', margin: 'auto'}}>

                {list_of_ad}
                </div>

              </Card>
              </div>
                <LearnFooter/>
                </div>

                )
            } else {
                return (
                    <div>
                    <LearnHeader/>

                  <div  className="learn-content mdl-typography--text-center">
                      <div style={spacerStyle} />
                      <Card shadow={0} style={cardStyle} >
                        <CardTitle className="mdl-color--indigo mdl-color-text--white mdl-shadow--2dp">Additional Resources</CardTitle>

                    <div style={{width: '80%', margin: 'auto'}}>

              <h4>NO ADDITIONAL RESOURCE WEBSITES AVAILABLE</h4>
                    </div>

                  </Card>
                  </div>
                    <LearnFooter/>
                    </div>

                    )
            }
        } else {
            return (
                    <div>
                    <LearnHeader/>

                  <div  className="learn-content mdl-typography--text-center">
                      <div style={spacerStyle} />
                      <Card shadow={0} style={cardStyle} >
                        <CardTitle className="mdl-color--indigo mdl-color-text--white mdl-shadow--2dp">Additional Resources</CardTitle>

                    <div style={{width: '80%', margin: 'auto'}}>

              <h4>NO ADDITIONAL RESOURCE WEBSITES AVAILABLE</h4>
                    </div>

                  </Card>
                  </div>
                    <LearnFooter/>
                    </div>

                )
        }
    } 

}

export default ADpage