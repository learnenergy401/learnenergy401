import React, { Component } from 'react'
import {Drawer,Content,Layout,Navigation,Card,CardTitle,List,ListItem,ListItemContent} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

var drawerStyle = {

}

var cardTitleStyle = {
    center:'true'
}
var listStyle = {
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
            <div>
            <Layout fixedDrawer>
                <Drawer style={drawerStyle} title="Title">
                    <Navigation>
                        <a href="">Link</a>
                        <a href="">Link</a>
                        <a href="">Link</a>
                        <a href="">Link</a>
                    </Navigation>
                </Drawer>
                <Content>
                    <List style={listStyle}>
                      <ListItem>
                        <ListItemContent icon="person">Bryan Cranston</ListItemContent>
                      </ListItem>
                      <ListItem>
                        <ListItemContent icon="person">Aaron Paul</ListItemContent>
                      </ListItem>
                      <ListItem>
                        <ListItemContent icon="person">Bob Odenkirk</ListItemContent>
                      </ListItem>
                    </List>
                </Content>
            </Layout>
            
            </div>
        );
    }
};



export default SideMenuProfile