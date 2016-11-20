import React, { Component } from 'react';
import {Button,Textfield,Chip} from 'react-mdl';
import TagsInput from "react-tagsinput"
import store from './Store.js'

import { connect } from "react-redux"
import { addTag,deleteTag } from "./Actions/tagActions"



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
  /**
  * @ignore
  */
    script(){
        
        this.props.dispatch(addTag("gg"));
        this.props.dispatch(addTag("gg1"));
        this.props.dispatch(addTag("gg2"));
        
    }
    script1(){
        this.props.dispatch(deleteTag("gg1"));
    }

    contains(a, text) {
        var i = a.length;
        while (i--) {
           if (a[i].text == text) {
               return true;
           }
        }
        return false;
    }

    handleAddTag(){
      const tags = this.props.tags
        var tagText = document.getElementById("addTag").value
        if (tagText){
          if(!this.contains(tags,tagText)){
            if(tags.length<5){
              this.props.dispatch(addTag(tagText));
            }
          }
        }
        
    }

    handleDelete(text){
        this.props.dispatch(deleteTag(text))
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
          <div>
            <Textfield floatingLabel maxLength="20" label="addTag"  type="addTag" className="form-control" id="addTag"/>
            <Button onClick = {this.handleAddTag.bind(this)}>add tag</Button>
            </div>
            <Button onClick = {this.script.bind(this)}>add 3 tags</Button>
            <Button onClick = {this.script1.bind(this)}>delete 2</Button>
            <div>{mappedTags}</div>
          </div>
            )
        }

};

export default Scripts
