import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ComposedComponent => {
  class VerifyShippingExitst extends Component {
    componentWillMount() {
      if (!this.props.cart.shippingOption) {
        this.props.history.push('/cart');
      }
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    cart: state.cart,
  });

  return connect(mapStateToProps)(VerifyShippingExitst);
};
