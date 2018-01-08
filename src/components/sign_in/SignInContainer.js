import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions/auth';
import SignIn from '../forms/AccountActions';

export class SignInContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = formInfo => {
    const { email, password } = formInfo;
    this.props.signIn(email, password);
  };
  componentDidMount() {
    if (this.props.token) {
      this.props.history.push('/confirm/signin');
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.token) {
      this.props.history.push('/confirm/signin');
    }
  }
  render() {
    return (
      <SignIn
        {...this.props}
        onSubmit={this.handleSubmit}
        fields={['email']}
        passwordFields={['password']}
        title="Sign In"
      />
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth.token,
});

const mapDispatchToProps = dispatch => ({
  signIn: (email, password) => dispatch(signIn(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
