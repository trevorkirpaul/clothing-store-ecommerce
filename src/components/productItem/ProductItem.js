import React from 'react';
import ProductForm from './ProductForm';

export default ({ name, price, sizesAvail, colorsAvail, onSubmit }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <ProductForm
        onSubmit={onSubmit}
        sizes={sizesAvail}
        colors={colorsAvail}
      />
    </div>
  );
};
