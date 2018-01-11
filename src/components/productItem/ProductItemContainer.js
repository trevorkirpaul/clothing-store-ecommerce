import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProduct } from '../../actions/productItem';
import { addItem, confirmItemAdded } from '../../actions/cartItem';
import ProductItem from './ProductItem';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

export class ProductItemContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  // handles adding item to cart, connected to database
  handleSubmit = values => {
    const userID = this.props.userID;
    const productName = this.props.product.name;
    const product = this.props.product._id;
    const price = this.props.product.price;
    const imagePath = this.props.product.imagePath;
    const item = {
      ...values,
      productName,
      product,
      userID,
      price,
      imagePath,
    };

    this.props.addItem(item);
  };
  // closes dialog for item add, also dispatches confirmation of item added
  handleClose = () => {
    this.setState({
      open: false,
    });
    this.props.confirmItemAdded();
  };
  // for item add confirm dialog, goes to shopping cart
  handleViewCart = () => {
    this.props.confirmItemAdded();
    this.props.history.push('/cart');
  };
  componentDidMount() {
    const productID = this.props.match.params.id;
    this.props.getItem(productID);
  }
  componentWillReceiveProps(nextProps) {
    const itemAdded = nextProps.itemAdded || false;

    this.setState(() => ({
      open: itemAdded,
    }));
  }
  render() {
    const actions = [
      <RaisedButton label="Okay" primary={true} onClick={this.handleClose} />,
      <RaisedButton
        label="View Cart"
        secondary={true}
        onClick={this.handleViewCart}
      />,
    ];
    if (this.props.product) {
      return (
        <div>
          <ProductItem
            {...this.props.product}
            onSubmit={this.handleSubmit}
            btnLbl="label for button"
            userID={this.props.userID}
          />

          <Dialog
            title="Item added to cart!"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          />
        </div>
      );
    } else {
      return <p>loading</p>;
    }
  }
}

const mapStateToProps = state => ({
  product: state.product.product,
  userID: state.auth.id,
  itemAdded: state.cart.itemAdded,
  itemLoading: state.cart.loading,
});

const mapDispatchToProps = dispatch => ({
  getItem: id => dispatch(getProduct(id)),
  addItem: item => dispatch(addItem(item)),
  confirmItemAdded: () => dispatch(confirmItemAdded()),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ProductItemContainer
);
