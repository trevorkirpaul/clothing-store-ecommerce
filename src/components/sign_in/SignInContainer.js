import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions/auth';
import { getCart } from '../../actions/cart';
import SignIn from '../forms/AccountActions';

const tokenObject = token => ({
  headers: {
    authorization: token,
  },
});

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
    const auth = nextProps.auth;

    // if servers response tells us
    // account email is unverefied
    if (auth.unverifiedEmail) {
      this.props.history.push('/error/unverified-email');
    }

    if (nextProps.token) {
      this.props.getCart(tokenObject(nextProps.token));
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
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  signIn: (email, password) => dispatch(signIn(email, password)),
  getCart: token => dispatch(getCart(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
