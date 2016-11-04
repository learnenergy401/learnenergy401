import React, { Component } from 'react'
import {Button,Snackbar} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
/**
* @ignore
*/
class Toast extends React.Component {
  /**
  * @ignore
  */
  constructor(props) {
    super(props);
    this.handleShowSnackbar = this.handleShowSnackbar.bind(this);
    this.handleTimeoutSnackbar = this.handleTimeoutSnackbar.bind(this);
    this.state = { isSnackbarActive: false };
  }
  /**
  * @ignore
  */
  handleShowSnackbar() {
    this.setState({ isSnackbarActive: true });
  }
  /**
  * @ignore
  */
  handleTimeoutSnackbar() {
    this.setState({ isSnackbarActive: false });
  }
  /**
  * @ignore
  */
  render() {
    const { isSnackbarActive } = this.state;
    return (
      <div>
        <Snackbar
          active={isSnackbarActive}
          onTimeout={this.handleTimeoutSnackbar}>
            {this.prop}
          </Snackbar>
      </div>
    );
  }
}

export default Toast
