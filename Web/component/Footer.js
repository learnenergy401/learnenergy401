import React, { Component } from 'react'

class LearnFooter extends Component {
  render() {
    return (

      <footer className="android-footer mdl-mega-footer">
        <div className="mdl-mega-footer--top-section">
          <div className="mdl-mega-footer--left-section">
            <button className="mdl-mega-footer--social-btn" />
            &nbsp;
            <button className="mdl-mega-footer--social-btn" />
            &nbsp;
            <button className="mdl-mega-footer--social-btn" />
          </div>
          <div className="mdl-mega-footer--right-section">
            <a className="mdl-typography--font-light" href="#top">
              Back to Top
              <i className="material-icons">expand_less</i>
            </a>
          </div>
        </div>
        <div className="mdl-mega-footer--middle-section">
          <p className="mdl-typography--font-light">Satellite imagery: © 2014 Astrium, DigitalGlobe</p>
          <p className="mdl-typography--font-light">Some features and devices may not be available in all areas</p>
        </div>
        <div className="mdl-mega-footer--bottom-section">
          <a className="android-link mdl-typography--font-light" href>Blog</a>
          <a className="android-link mdl-typography--font-light" href>Privacy Policy</a>
        </div>
      </footer>
    );
  }
};


export default LearnFooter