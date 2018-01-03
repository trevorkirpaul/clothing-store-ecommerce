import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProduct } from '../../actions/productItem';
import { addItem } from '../../actions/cartItem';
import ProductItem from './ProductItem';

export class ProductItemContainer extends Component {
  handleSubmit = values => {
    const userID = this.props.userID;
    const productName = this.props.product.name;
    const product = this.props.product._id;
    const item = {
      ...values,
      productName,
      product,
      userID,
    };

    this.props.addItem(item);
  };
  componentDidMount() {
    const productID = this.props.match.params.id;
    this.props.getItem(productID);
  }
  render() {
    if (this.props.product) {
      return (
        <ProductItem
          {...this.props.product}
          onSubmit={this.handleSubmit}
          btnLbl="label for button"
        />
      );
    } else {
      return <p>loading</p>;
    }
  }
}

const mapStateToProps = state => ({
  product: state.product.product,
  userID: state.auth.id,
});

const mapDispatchToProps = dispatch => ({
  getItem: id => dispatch(getProduct(id)),
  addItem: item => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ProductItemContainer
);
