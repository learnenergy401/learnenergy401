import React, { Component } from 'react'
import Header from '../Header.js'
import Footer from '../Footer.js'
import LearnFooter from '../Footer.js'
import ComponentUpload from '../ComponentUpload.js'

class Upload extends Component {
    render(){
    return (
        <div className="learn-header">
        <Header/>
        <ComponentUpload/>
        <Footer/>
      </div>
    )
    }
}    
    
export default Upload