import React, { Component } from 'react'
import { Textfield,Grid,Cell } from 'react-mdl';

var Logout = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function(){
        return {
            error: false
        }
    },
    componentDidMount: function () {
        firebase.auth().signOut();
        this.setState({loggedIn: false});
        // this.context.router.replace('/');
    },
    render: function () {
        return <p>You are now logged out</p>;
    }
});

module.exports = Logout;