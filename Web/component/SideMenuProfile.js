import React, { Component } from 'react'
import {Drawer,Content,Navigation,Card,CardTitle,Layout} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

var drawerStyle = {

}

var cardTitleStyle = {
    center:'true'
}

var cardStyle = {
    width: '80%',
    margin: 'auto',
    top: '50px',
    height:'500px'
}

var cardTitleStyle = {
    center:'true'
}

class SideMenuProfile extends Component {
    render(){
        return(
                <Drawer style={drawerStyle} title="Title">
                    <Navigation>
                        <a href="">Link</a>
                        <a href="">Link</a>
                        <a href="">Link</a>
                        <a href="">Link</a>
                    </Navigation>
                </Drawer>

        );
    }
};



export default SideMenuProfile