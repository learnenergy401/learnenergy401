import React, { Component } from 'react'
import {Drawer,Navigation,List,ListItem,ListItemContent} from 'react-mdl';
import { connect } from "react-redux"
import { getCurrentUser } from "./Actions/userActions"



var sidemenuStyle={
    width: "240px",
    height: "100%",
    maxHeight: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    marginTop: "64px",
    zIndex:"99"
}

var listStyle={
    paddingLeft:"30px",
}
@connect((store) => {
  return {
    user: store.user
  };
})/*dont add semicolon here!*/


class SideMenuProfile extends Component {
    
    render(){
        const {user} = this.props
        
        if (user.role == 0){
            return(
                    <aside style={sidemenuStyle} className="mdl-typography--headline">
                        <List style={listStyle}>
                          <ListItem>
                            <ListItemContent >Profile</ListItemContent>
                          </ListItem>
                          <ListItem>
                            <ListItemContent >Bookmarks</ListItemContent>
                          </ListItem>
                          <ListItem>
                            <ListItemContent >My RFP</ListItemContent>
                          </ListItem>
                        </List>
                    </aside>

            );
        }else if (user.role==1){
            return(
                    <aside style={sidemenuStyle} className="mdl-typography--headline">
                        <List style={listStyle}>
                          <ListItem>
                            <ListItemContent >Profile</ListItemContent>
                          </ListItem>
                          <ListItem>
                            <ListItemContent >My Courses</ListItemContent>
                          </ListItem>
                          <ListItem>
                            <ListItemContent >My RFP</ListItemContent>
                          </ListItem>
                        </List>
                    </aside>

            );
        }else{
            return(
                <div>broken</div>
            )
        }
    }
};



export default SideMenuProfile