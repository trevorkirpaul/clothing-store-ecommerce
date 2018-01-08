import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../actions/cartItem';
import { getAllProducts } from '../../actions/products';
import Products from './Products';

export class ProductsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.props.getProducts();
  }
  componentWillReceiveProps(nextProps) {
    const products = nextProps.products;
    if (products.items) {
      const contents = products.items;
      this.setState(() => ({
        products: contents,
      }));
    }
  }
  render() {
    return <Products products={this.state.products} />;
  }
}

const mapStateToProps = state => ({
  products: state.products,
  id: state.auth.id,
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  getProducts: () => dispatch(getAllProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
