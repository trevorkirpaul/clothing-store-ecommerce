import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCart, checkPromoCode, removePromoCode } from '../../actions/cart';
import { removeItem } from '../../actions/cartItem';
import Cart from './Cart';
import CartHeader from './CartHeader';
import Shipping from './Shipping';
import DiscountCode from './DiscountCode';
import CartFooter from './CartFooter';

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
      discount: {
        codePhrase: null,
        amount: 1,
        validCode: false,
      },
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
  handleDiscount = codePhrase => {
    const userID = this.props.userID;
    this.props.checkPromoCode(codePhrase, userID);
  };
  handleRemoveDiscount = () => {
    const userID = this.props.userID;
    this.setState(() => ({
      discount: {
        codePhrase: null,
        amount: 1,
        validCode: false,
      },
    }));
    this.props.removePromoCode(userID);
  };
  componentDidMount() {
    this.props.getCart();
  }
  componentWillReceiveProps(nextProps) {
    const cart = nextProps.cart.contents;
    const discount = nextProps.cart.discount;
    if (cart !== undefined) {
      this.setState(() => ({
        cart,
        total: getTotal(cart),
        discount,
      }));
    }
  }

  render() {
    return (
      <div>
        <CartHeader cart={this.state.cart} total={this.state.total} />
        <Cart cart={this.props.cart} handleRemove={this.handleRemove} />
        <Shipping
          handleSelectShipping={this.handleSelectShipping}
          shippingOption={this.state.shippingOption}
        />
        <DiscountCode
          handleDiscount={this.handleDiscount}
          info={this.state.discount}
          handleRemove={this.handleRemoveDiscount}
        />
        <CartFooter
          total={this.state.total}
          discount={this.state.discount}
          shipping={this.state.shippingOption}
        />
      </div>
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
  checkPromoCode: (codePhrase, userID) =>
    dispatch(checkPromoCode(codePhrase, userID)),
  removePromoCode: userID => dispatch(removePromoCode(userID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
