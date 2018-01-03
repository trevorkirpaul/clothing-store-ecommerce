import React from 'react';
import CartItem from './CartItem';

export default ({ cart, handleRemove }) => {
  if (cart.loading === true) {
    return (
      <div>
        <p>loading cart...</p>
      </div>
    );
  } else if (cart.contents) {
    return (
      <div>
        <ul>
          {cart.contents.map(item => (
            <CartItem
              key={item._id}
              name={item.productName}
              cartItemID={item._id}
              productID={item.product}
              handleRemove={handleRemove}
            />
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }
};
