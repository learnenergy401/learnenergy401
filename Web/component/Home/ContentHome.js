import React, { Component } from 'react'
import {Content,Grid,Cell} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import YouTube from '../ViewCourse/Youtube.js'

var div1Stile = {
  height: "600px",
  // background: "#F3F3F3",
  backgroundImage: 'url(../../images/eng2.jpg)',
  backgroundAttachment: "fixed",
}


class ContentHome extends Component {
    _onReady(event) {
    // access to player in all event handlers via event.target
        event.target.playVideo();
    }
    /**
    * Loads the front page middle section
    * @return {html} - returns the contentHome component
    */
    render(){
        const opts = {
            height: '400',
            width: '300',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
                controls: 1,
            }
        }

        return(
          <div>
            <div  style = {div1Stile} className="mdl-typography--text-center">
              <a  name="top" />
                <div style = {{color:"#132F82", paddingTop:"200px"}} className="logo-font learn-slogan">LearnEnergy</div>
                <div style = {{color:"white"}} className="center logo-font learn-sub-slogan">Our mission is to create an international community for the sharing of knowledge</div>
                <div style = {{color:"white"}} className="center logo-font learn-sub-slogan"> and the collaborative development of new education and training.</div>
                <a href="#screens">
                </a>
            </div>

              <div className="android-wear-band">
                <div className="android-wear-band-text">
                  <div className="mdl-typography--display-2 mdl-typography--font-thin">Join Us Today</div>
                  <p className="mdl-typography--headline mdl-typography--font-thin">
                    Learn business, creative, education and tech skills
                    taught by expert instructors.
                  </p>
                  <p>
                    <a className="mdl-typography--font-regular mdl-typography--text-uppercase android-alt-link" href="#/signup">
                      click here to sign up&nbsp;<i className="material-icons">chevron_right</i>
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="video-section">
                  <Grid>
                    <Cell style= {{paddingTop:"15%"}} col={4}>
                      <div style={{textAlign: "right"}} className="mdl-typography--display-1 mdl-typography--font-thin">More About Us</div>
                      <p style={{textAlign: "right"}}  className=" mdl-typography--font-thin">
                        Learn how to get started with LearnEnergy
                      </p>
                    </Cell>
                    <Cell style={{marginTop:"40px", marginLeft:"10px"}} col={6}>
                        <YouTube style={{height:'200px'}}
                                videoId={"YnJNAXIFJ2E"}
                                opts={opts}
                                
                            />
                    </Cell>
                  </Grid>
              </div>

              <div className="android-more-section">
        <div style={{color:"#F82C4C"}} className="android-section-title mdl-typography--display-1-color-contrast">More from LearnEnergy</div>
        <div className="android-card-container mdl-grid">
          <div className="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp">
            <div className="mdl-card__media">
              <img src="images/more-from-1.png" />
            </div>
            <div className="mdl-card__title">
              <h4 className="mdl-card__title-text">Get going on LearnEnergy</h4>
            </div>
            <div className="mdl-card__supporting-text">
              <span className="mdl-typography--font-light mdl-typography--subhead">Four tips to make your experience in LearnEnergy quick and easy</span>
            </div>
            <div className="mdl-card__actions">
              <a className="android-link mdl-button mdl-js-button mdl-typography--text-uppercase" href>
                Join LearnEnergy
                <i className="material-icons">chevron_right</i>
              </a>
            </div>
          </div>
          <div className="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp">
            <div className="mdl-card__media">
              <img src="images/more-from-4.png" />
            </div>
            <div className="mdl-card__title">
              <h4 className="mdl-card__title-text">Create your own courses</h4>
            </div>
            <div className="mdl-card__supporting-text">
              <span className="mdl-typography--font-light mdl-typography--subhead">Enjoy the courses you actually need. </span>
            </div>
            <div className="mdl-card__actions">
              <a className="android-link mdl-button mdl-js-button mdl-typography--text-uppercase" href>
                LearnEnergy.com
                <i className="material-icons">chevron_right</i>
              </a>
            </div>
          </div>
          <div className="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp">
            <div className="mdl-card__media">
              <img src="images/more-from-2.png" />
            </div>
            <div className="mdl-card__title">
              <h4 className="mdl-card__title-text">Get a clean customisable home screen</h4>
            </div>
            <div className="mdl-card__supporting-text">
              <span className="mdl-typography--font-light mdl-typography--subhead">A clean, simple, customisable home screen that comes with the power of LearnEnergy</span>
            </div>
            <div className="mdl-card__actions">
              <a className="android-link mdl-button mdl-js-button mdl-typography--text-uppercase" href>
                sign up now
                <i className="material-icons">chevron_right</i>
              </a>
            </div>
          </div>
          <div className="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp">
            <div className="mdl-card__media">
              <img src="images/more-from-3.png" />
            </div>
            <div className="mdl-card__title">
              <h4 className="mdl-card__title-text">Millions to choose from</h4>
            </div>
            <div className="mdl-card__supporting-text">
              <span className="mdl-typography--font-light mdl-typography--subhead">Hail a taxi, find a recipe, run through a temple – Google Play has all the apps and games that let you make your Android device uniquely yours.</span>
            </div>
            <div className="mdl-card__actions">
              <a className="android-link mdl-button mdl-js-button mdl-typography--text-uppercase" href>
                Find courses
                <i className="material-icons">chevron_right</i>
              </a>
            </div>
          </div>
        </div>
      </div>



          </div>
        );
    }
};



export default ContentHome
