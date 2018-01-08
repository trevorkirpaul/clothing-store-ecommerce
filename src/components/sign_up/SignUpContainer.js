import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../actions/auth';
import SignUp from './SignUp';

export class SignUpContainer extends Component {
  handleSubmit = info => {
    const { email, password } = info;
    this.props.signUp(email, password);
  };
  componentWillReceiveProps(nextProps) {
    const auth = nextProps.auth;
    if (auth.token) {
      this.props.history.push('/');
    }
  }
  render() {
    return <SignUp {...this.props} onSubmit={this.handleSubmit} />;
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  signUp: (email, pass) => dispatch(signUp(email, pass)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
