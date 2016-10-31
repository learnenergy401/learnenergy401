import React, { Component } from 'react'
import {Drawer,Navigation,List,ListItem,ListItemContent,Button} from 'react-mdl';
import { connect } from "react-redux"
import { getCurrentUser } from "../Actions/userActions"
import { changeMenu } from "../Actions/profileActions"



var sidemenuItemStyle = {
    width:"100%"
}

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

}
@connect((store) => {
  return {
    user: store.user,
    profile: store.profile
  };
})/*dont add semicolon here!*/


class SideMenuProfile extends Component {
    changeMenuNumberZero(){
        this.props.dispatch(changeMenu(0))
    }
    
    changeMenuNumberOne(){
        this.props.dispatch(changeMenu(1))
    }
    
    changeMenuNumberTwo(){
        this.props.dispatch(changeMenu(2))
    }
    
    render(){
        const {user,profile} = this.props
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
                            <Button onClick={this.changeMenuNumberZero.bind(this)} style={sidemenuItemStyle} >Profile</Button>
                          </ListItem>
                          <ListItem>
                            <Button onClick={this.changeMenuNumberOne.bind(this)} style={sidemenuItemStyle}>My Courses</Button>
                          </ListItem>
                          <ListItem>
                            <Button onClick={this.changeMenuNumberTwo.bind(this)} style={sidemenuItemStyle}>Add Course</Button>
                          </ListItem>
                        </List>
                    </aside>

            );
        }else{
            return(
                <div>Loading</div>
            )
        }
    }
};



export default SideMenuProfile