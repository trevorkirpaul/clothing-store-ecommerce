import React from 'react';
import CartItem from './CartItem';
import CartHeader from './CartHeader';
import styled from 'styled-components';

const ListWrapper = styled.ul`
  list-style: none;
  max-width: 900px;
  margin: 15px auto 15px auto;
`;

export default ({ cart, handleRemove, total }) => {
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
          <CartHeader cart={cart.contents} total={total} />
          <ListWrapper>
            {cart.contents.map(item => (
              <CartItem
                key={item._id}
                name={item.productName}
                imagePath={item.product.imagePath}
                color={item.color}
                size={item.size}
                price={item.product.price}
                quantity={item.quantity}
                cartItemID={item._id}
                productID={item.product._id}
                handleRemove={handleRemove}
              />
            ))}
          </ListWrapper>
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
