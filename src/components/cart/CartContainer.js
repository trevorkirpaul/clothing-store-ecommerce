import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCart } from '../../actions/cart';
import { removeItem } from '../../actions/cartItem';
import Cart from './Cart';

// function to calculate total price
// arr.reduce() wouldn't work here for some reason
const getTotal = arr => {
  if (arr.length > 1) {
    let total = 0;

    arr.forEach(item => {
      const price = item.price;
      const quantity = item.quantity;
      total += price * quantity;
    });

    return total;
  } else if (arr.length === 1) {
    return arr[0].price * arr[0].quantity;
  } else {
    return 0;
  }
};

export class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      cart: [],
      shippingOption: '',
      discount: 0,
    };
  }
  handleRemove = item => {
    const userID = this.props.userID;
    const itemObj = {
      cartItemID: item,
      userID,
    };
    this.props.removeItem(itemObj);
  };
  // shipping
  handleSelectShipping = (e, i, val) => {
    const shippingOption = val;
    this.setState(() => ({
      shippingOption,
    }));
  };
  // discount
  handleDiscount = amount => {
    console.log('discount:', amount);
  };
  componentDidMount() {
    this.props.getCart();
  }
  componentWillReceiveProps(nextProps) {
    const cart = nextProps.cart.contents;

    if (cart !== undefined) {
      this.setState(() => ({
        total: getTotal(cart),
      }));
    }
  }

  render() {
    return (
      <Cart
        cart={this.props.cart}
        handleRemove={this.handleRemove}
        total={this.state.total}
        handleSelectShipping={this.handleSelectShipping}
        shippingOption={this.state.shippingOption}
        handleDiscount={this.handleDiscount}
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
