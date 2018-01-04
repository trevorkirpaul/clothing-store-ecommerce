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
    if (cart.contents.length === 0) {
      // if no items in cart
      return (
        <div>
          <p>No items in cart :(</p>
        </div>
      );
    } else if (cart.contents.length > 0) {
      // if items in cart
      return (
        <div>
          <ul>
            {cart.contents.map(item => (
              <CartItem
                key={item._id}
                name={item.productName}
                color={item.color}
                size={item.size}
                quantity={item.quantity}
                cartItemID={item._id}
                productID={item.product}
                handleRemove={handleRemove}
              />
            ))}
          </ul>
        </div>
      );
    }
  } else {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }
};
