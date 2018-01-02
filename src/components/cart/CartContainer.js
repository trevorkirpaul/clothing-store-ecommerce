import React from 'react';
import { connect } from 'react-redux';
import Cart from './Cart';

export const Container = props => {
  return <Cart {...props} cart={props.cart} />;
};

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Container);
