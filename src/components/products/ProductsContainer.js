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
    return <Products products={this.state.products} />;
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
