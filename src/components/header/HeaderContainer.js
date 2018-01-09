import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';

export const Container = ({ auth }, props) => {
  return <Header {...props} loggedIn={!!auth.token} />;
};

export class HeaderContainer extends Component {
  render() {
    return <Header {...this.props} loggedIn={!!this.props.auth.token} />;
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  auth: state.auth,
});

export default connect(mapStateToProps)(HeaderContainer);
