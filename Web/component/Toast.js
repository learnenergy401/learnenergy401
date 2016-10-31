import React, { Component } from 'react'
import {Button,Snackbar} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

class Toast extends React.Component {
  constructor(props) {
    super(props);
    this.handleShowSnackbar = this.handleShowSnackbar.bind(this);
    this.handleTimeoutSnackbar = this.handleTimeoutSnackbar.bind(this);
    this.state = { isSnackbarActive: false };
  }

  handleShowSnackbar() {
    this.setState({ isSnackbarActive: true });
  }
  handleTimeoutSnackbar() {
    this.setState({ isSnackbarActive: false });
  }
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