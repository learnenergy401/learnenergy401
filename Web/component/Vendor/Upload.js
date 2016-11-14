import React, { Component } from 'react'
import Header from '../Header.js'
import Footer from '../Footer.js'
import LearnFooter from '../Footer.js'
import ComponentUpload from '../ComponentUpload.js'

class Upload extends Component {

	/**
	 * Upload Html
	 * @returns {html} Upload - Returns html for upload
	 */
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