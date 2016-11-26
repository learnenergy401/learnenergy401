import React, { Component } from 'react'
import { Footer, FooterSection, FooterDropDownSection, FooterLinkList } from 'react-mdl';

class LearnFooter extends Component {
  /**
  * Loads the footer
  * @return {html} - returns the footer
  */
  render() {
    return (
      <Footer size="mini">
         <FooterSection type="left" logo="Title">
             <FooterLinkList>
                 <a href="#">Help</a>
                 <a href="#">Privacy & Terms</a>
             </FooterLinkList>
         </FooterSection>
      </Footer>
    );
  }
};


export default LearnFooter
