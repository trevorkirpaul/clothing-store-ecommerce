import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCart } from '../../actions/cart';
import { removeItem } from '../../actions/cartItem';
import Cart from './Cart';

// export const Container = props => {
//   return <Cart {...props} cart={props.cart} />;
// };

export class Container extends Component {
  handleRemove = item => {
    const userID = this.props.userID;
    const itemObj = {
      cartItemID: item,
      userID,
    };
    this.props.removeItem(itemObj);
  };
  componentDidMount() {
    this.props.getCart();
  }
  render() {
    return (
      <Cart
        {...this.props}
        cart={this.props.cart}
        handleRemove={this.handleRemove}
      />
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  userID: state.auth.id,
});

const mapDispatchToProps = dispatch => ({
  getCart: () => dispatch(getCart()),
  removeItem: item => dispatch(removeItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
