import React, { Component } from 'react'
import {Content, Card,CardTitle,List,ListItem,ListItemContent,Layout} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'


var cardStyle = {
    width: '80%',
    margin: 'auto',
    top: '50px',
    height:'500px'
}

var cardTitleStyle = {
    center:'true'
}

class ContentProfile extends Component {
    render(){
        return(
              <Content className="learn-content">
                    <List>
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
        );
    }
};



export default ContentProfile