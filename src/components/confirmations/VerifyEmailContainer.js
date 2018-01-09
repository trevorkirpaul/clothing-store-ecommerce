import React, { Component } from 'react';
import { connect } from 'react-redux';
import { verifyEmail } from '../../actions/auth';
import VerifyEmail from './VerifyEmail';

export class VerifyEmailContainer extends Component {
  handleVerify = () => {
    const token = this.props.match.params.token;
    this.props.verifyEmail(token);
  };

  componentWillReceiveProps(nextProps) {
    // redirect once token is loaded from response
    const auth = nextProps.auth;
    if (auth.token) {
      this.props.history.push('/');
    }
  }
  render() {
    return <VerifyEmail {...this.props} handleVerify={this.handleVerify} />;
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  verifyEmail: token => dispatch(verifyEmail(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  VerifyEmailContainer
);
