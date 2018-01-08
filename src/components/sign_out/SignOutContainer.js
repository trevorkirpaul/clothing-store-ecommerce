import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../actions/auth';
import SignOut from './SignOut';

export class SignOutContainer extends Component {
  componentDidMount() {
    const auth = this.props.auth;

    auth.token === null && this.props.history.push('/');
  }
  componentWillReceiveProps(nextProps) {
    const auth = nextProps.auth;

    !auth.token && this.props.history.push('/');
  }
  render() {
    return <SignOut {...this.props} />;
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignOutContainer);
