import React, { Component } from 'react';
import {Button,Textfield,Chip} from 'react-mdl';
import TagsInput from "react-tagsinput"
import store from './Store.js'

import { connect } from "react-redux"

import { fetchUsers,getCurrentUser,storeReqEOI } from "./Actions/userActions"




@connect((store) => {
  return {
    user: store.user,
    tags: store.tags
  };
})/*dont add semicolon here!*/


/**
* @ignore
*/
class Scripts extends Component {
  
  storeReqEOI(info) {
    this.props.dispatch(storeReqEOI(info))
  }
  /**
  * @ignore
  */
    script(){

      var vendor_uid = "gE88Fyh2a8Pbstvq1Yv3QgnoTYf1"
      var course_uid = "ggggg"
      var email = "purchasereoi@gmail.com"
      var info = {vendor_uid, course_uid, email}

      this.storeReqEOI(info)

    }
    /**
    * @ignore
    */
    render(){
        const tags = this.props.tags
        const mappedTags = tags.map(tag =>
            
            <Chip style={{marginRight:"3px"}} key={tag.text} onClose={()=>(this.handleDelete(tag.text))}>{tag.text}</Chip>

        )
        return(

          <div>
    
          </div>
            )
        }

};

export default Scripts
