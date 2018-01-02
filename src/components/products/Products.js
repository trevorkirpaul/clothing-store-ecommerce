import React from 'react';
import ProductsList from './ProductsList';

export default ({ products, handleAdd }) => {
  if (products) {
    return (
      <div>
        <p>Number of products: {products.length}</p>
        <ProductsList products={products} handleAdd={handleAdd} />
      </div>
    );
  } else {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }
};
