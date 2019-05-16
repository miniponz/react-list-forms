import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends Component {
  state = {
    error: false
  }

  static propTypes = {
    children: PropTypes.node
  }

  static getDerivedStateFromError() {
    return { error: true };
  }

  componentDidCatch(error) {
    console.log(error);
  }

  render() {
    if(this.state.error) {
      return <h3>Error!</h3>;
    }
    return this.props.children;
  }
}
