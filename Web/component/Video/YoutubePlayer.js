import React, { Component } from 'react'
import Header from '../Header.js'
import Footer from '../Footer.js'
import LearnFooter from '../Footer.js'
import YouTube from './Youtube.js'

var componentStyle = {
    margin: 'auto',
}

class YoutubePlayer extends Component{
    render() {
    const opts = {
      height: '360',
      width: '480',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 1,
        enablejsapi: 0
      }
    };

    return (
      <div>
      <Header/>
      <div>
      <YouTube
        videoId="w9db38IdSpk"
        opts={opts}
      />
      </div>
      <Footer/>
      </div>
    );
  }


}

export default YoutubePlayer