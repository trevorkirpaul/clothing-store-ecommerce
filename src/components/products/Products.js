import React from 'react';
import ProductsList from './ProductsList';
// import styled from 'styled-components';

export default ({ products, handleAdd }) => {
  if (products) {
    return (
      <div>
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
