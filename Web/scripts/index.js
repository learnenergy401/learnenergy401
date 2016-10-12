

var Home = React.createClass ({
  render:function() {
    return (
      <div className="learn-header mdl-layout__header">
        <Header/>
        <IntroDiv/>
        <Footer/>
      </div>
    );
  }
})

var Header = React.createClass({
    render:function(){
        return(
            
        <div className="mdl-layout__header-row">
          <span className="learn-title mdl-layout-title">
            <img className="learn-logo-image" src="images/learn_logo.png" />
          </span>
          {/* Add spacer, to align navigation to the right in desktop */}
          <div className="mdl-layout-spacer" />
          <div className="learn-search-box mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right mdl-textfield--full-width">
            <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search-field">
              <i className="material-icons">search</i>
            </label>
            <div className="mdl-textfield__expandable-holder">
              <input className="mdl-textfield__input" type="text" id="search-field" />
            </div>
          </div>
          {/* Navigation */}
          <div className="learn-navigation-container">
            <nav className="learn-navigation mdl-navigation">
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href>Courses</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href>Pricing</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href>How it works</a>
            </nav>
          </div>
          <button className="learn-signIn-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-color--indigo mdl-color-text--white mdl-shadow--dp">
            SIGN UP
          </button>
          <button className="learn-signUp-button mdl-button mdl-js-button mdl-button--accent mdl-color-text--indigo ">
            SIGN IN
          </button>
        </div>
      
    );}
    
    
});

var IntroDiv = React.createClass({
    render:function(){
        return(
          <div className="android-content mdl-layout__content">
            <a name="top" />
            <div className="android-be-together-section mdl-typography--text-center">
              <div className="logo-font android-slogan">Learn Energy</div>
              <div className="logo-font android-sub-slogan">some introduction text here.</div>
              <a href="#screens">
              </a>
            </div>
          </div>
        );
    }
});


var Footer = React.createClass({
  render: function() {
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
});

ReactDOM.render(
  <Home/>,
  document.getElementById('header')
);
