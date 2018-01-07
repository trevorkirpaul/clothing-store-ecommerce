import React, { Component } from 'react';
import { connect } from 'react-redux';
import { create } from '../../actions/checkout';
import CheckOutHeader from './CheckOutHeader';
import CheckoutReview from './CheckoutReview';
import CheckoutActions from './CheckoutActions';

// function to get total
const getTotal = arr => {
  let total = 0;

  arr.forEach(item => {
    const price = item.price;
    const quantity = item.quantity;
    total += price * quantity;
  });

  return total;
};

export class CheckoutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      total: null,
    };
  }
  handleSubmit = () => {
    const userID = this.props.userID;
    const cartItems = this.props.cart.contents;
    // create array with relevant details for order
    const cartItemMap = cartItems.map(item => ({
      color: item.color,
      price: item.price,
      quantity: item.quantity,
      size: item.size,
      productID: item.product._id,
    }));
    const discount = this.props.cart.discount;

    const item = {
      userID,
      cartItems: cartItemMap,
      discount,
    };

    this.props.create(item);
  };

  componentDidMount() {
    // check if cart props exits, then generate total price
    if (this.props.cart) {
      const cart = this.props.cart;
      cart.contents &&
        this.setState(() => ({
          total: getTotal(cart.contents) * cart.discount.amount,
        }));
    }
  }

  componentWillReceiveProps(nextProps) {
    const cart = nextProps.cart;

    cart.contents &&
      this.setState(() => ({
        total: getTotal(cart.contents) * cart.discount.amount,
      }));
  }
  render() {
    // const { contents } = this.props.cart;
    return (
      <div>
        <CheckOutHeader total={this.state.total} />
        <CheckoutReview cart={this.props.cart.contents} />
        <CheckoutActions handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  userID: state.auth.id,
});

const mapDispatchToProps = dispatch => ({
  create: item => dispatch(create(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);
