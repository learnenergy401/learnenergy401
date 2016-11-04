'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = exports.propTypes = undefined;

var _react = require('react');

var string = _react.PropTypes.string;
var bool = _react.PropTypes.bool;
var number = _react.PropTypes.number;
var oneOfType = _react.PropTypes.oneOfType;
var shape = _react.PropTypes.shape;
var object = _react.PropTypes.object;
var func = _react.PropTypes.func;
var propTypes = exports.propTypes = {
  url: string,
  playing: bool,
  loop: bool,
  controls: bool,
  volume: number,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
  hidden: bool,
  className: string,
  style: object,
  progressFrequency: number,
  soundcloudConfig: shape({
    clientId: string,
    showArtwork: bool
  }),
  youtubeConfig: shape({
    playerVars: object,
    preload: bool
  }),
  vimeoConfig: shape({
    iframeParams: object,
    preload: bool
  }),
  fileConfig: shape({
    attributes: object
  }),
  onReady: func,
  onStart: func,
  onPlay: func,
  onPause: func,
  onBuffer: func,
  onEnded: func,
  onError: func,
  onDuration: func,
  onProgress: func
};

var defaultProps = exports.defaultProps = {
  playing: false,
  loop: false,
  controls: false,
  volume: 0.8,
  width: 640,
  height: 360,
  hidden: false,
  progressFrequency: 1000,
  soundcloudConfig: {
    clientId: 'e8b6f84fbcad14c301ca1355cae1dea2',
    showArtwork: true
  },
  youtubeConfig: {
    playerVars: {},
    preload: false
  },
  vimeoConfig: {
    iframeParams: {},
    preload: false
  },
  fileConfig: {
    attributes: {}
  },
  onReady: function onReady() {},
  onStart: function onStart() {},
  onPlay: function onPlay() {},
  onPause: function onPause() {},
  onBuffer: function onBuffer() {},
  onEnded: function onEnded() {},
  onError: function onError() {},
  onDuration: function onDuration() {},
  onProgress: function onProgress() {}
};