import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ComposedComponent => {
  class Authentication extends Component {
    componentWillMount() {
      if (!this.props.auth.token) {
        this.props.history.push('/');
      }
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    auth: state.auth,
  });

  return connect(mapStateToProps)(Authentication);
};
