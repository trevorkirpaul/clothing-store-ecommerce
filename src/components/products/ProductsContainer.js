import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../actions/cartItem';
import Products from './Products';

export class ProductsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  handleAdd = (id, name) => {
    // for testing purposes, create dummy cartItem info obj here
    // leter on, user will choose options and app will create this obj
    const userID = this.props.id;

    const item = {
      productName: name,
      color: 'black',
      size: 'large',
      quantity: 2,
      product: id,
      userID,
    };
    console.log(item);
    this.props.addItem(item);
  };
  componentDidMount() {
    this.setState(() => ({
      products: this.props.products.items,
    }));
  }
  componentWillReceiveProps(nextProps) {
    this.setState(() => ({
      products: nextProps.products.items,
    }));
  }
  render() {
    return (
      <Products products={this.state.products} handleAdd={this.handleAdd} />
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  id: state.auth.id,
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
