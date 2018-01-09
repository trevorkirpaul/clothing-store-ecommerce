import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { signIn } from '../../actions/auth';

const Wrapper = styled.div`
  margin: 10px auto;
  padding: 15px;
  @media (max-width: 450px;) {
    margin: 10px;
    width: 100%;
  }
`;

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  handleEmail = e => {
    const val = e.target.value;
    this.setState(() => ({
      email: val,
    }));
  };
  handlePassword = e => {
    const val = e.target.value;
    this.setState(() => ({
      password: val,
    }));
  };
  handleSubmit = () => {
    const { email, password } = this.state;
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
      <Wrapper>
        <input
          type="text"
          name="email"
          placeholder="email"
          value={this.state.email}
          onChange={this.handleEmail}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handlePassword}
        />
        <button onClick={this.handleSubmit}>Sign In</button>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth.token,
});

const mapDispatchToProps = dispatch => ({
  signIn: (email, password) => dispatch(signIn(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
