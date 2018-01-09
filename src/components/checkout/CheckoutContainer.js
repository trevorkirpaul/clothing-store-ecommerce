import React, { Component } from 'react';
import { connect } from 'react-redux';
import { create, clear } from '../../actions/checkout';
import CheckOutHeader from './CheckOutHeader';
import CheckoutReview from './CheckoutReview';
import CheckoutActions from './CheckoutActions';
import CheckoutModal from './CheckoutModal';

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
      loading: false,
      complete: false,
    };
  }
  handleSubmit = () => {
    const userID = this.props.userID;
    const cartItems = this.props.cart.contents;
    const shipping = this.props.cart.shippingOption;
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
      shipping,
    };

    this.props.create(item);
  };
  // for CheckoutModal to close
  handleClose = () => {
    // we reset local state and clear redux state for order (checkout.order)
    this.setState({ open: false, complete: false, loading: false });
    this.props.clear();

    this.props.history.push('/thankyou');
  };
  componentDidMount() {
    // check if cart props exits, then generate total price
    // using discount and shipping price from redux state
    const { cart } = this.props;
    if (cart) {
      const total = getTotal(cart.contents);
      const shipping = cart.shippingOption.price;
      const discount = cart.discount.amount === 1 ? 0 : cart.discount.amount;
      this.setState(() => ({
        total: total - total * discount + shipping,
      }));
    }
  }

  componentWillReceiveProps(nextProps) {
    const { cart, checkout } = nextProps;
    if (cart.contents) {
      const total = getTotal(cart.contents);
      const shipping = cart.shippingOption.price;
      this.setState(() => ({
        total: total - total * cart.discount.amount + shipping,
      }));
    }
    if (checkout) {
      // when order is sent to db, this will be true

      checkout.loading &&
        this.setState(() => ({ loading: true, complete: false, open: true }));
      // upon completion of order sent, we get back the order as a prop
      // thus verifying the corder was complete
      checkout.order &&
        this.setState(() => ({ loading: false, complete: true }));
    }
  }
  render() {
    // const { contents } = this.props.cart;
    return (
      <div>
        <CheckOutHeader total={this.state.total} />
        <CheckoutReview cart={this.props.cart.contents} />
        <CheckoutActions handleSubmit={this.handleSubmit} />
        <CheckoutModal
          open={this.state.open}
          loading={this.state.loading}
          complete={this.state.complete}
          handleClose={this.handleClose}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  userID: state.auth.id,
  checkout: state.checkout,
});

const mapDispatchToProps = dispatch => ({
  create: item => dispatch(create(item)),
  clear: () => dispatch(clear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);
