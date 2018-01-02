import React from 'react';
import ProductsListItem from './ProductsListItem';
export default ({ products, handleAdd }) => {
  return (
    <ul>
      {products.map(item => (
        <ProductsListItem
          key={item._id}
          name={item.name}
          id={item._id}
          handleAdd={handleAdd}
        />
      ))}
    </ul>
  );
};
