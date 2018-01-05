import React from 'react';
import CartItem from './CartItem';
import CartHeader from './CartHeader';
import Shipping from './Shipping';
import CartFooter from './CartFooter';
import styled from 'styled-components';
import DiscountCode from './DiscountCode';

const ListWrapper = styled.ul`
  list-style: none;
  max-width: 900px;
  margin: 15px auto 15px auto;
`;

export default ({
  cart,
  handleRemove,
  total,
  handleSelectShipping,
  shippingOption,
  handleDiscount,
}) => {
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
                imagePath={item.imagePath}
                color={item.color}
                size={item.size}
                price={item.price}
                quantity={item.quantity}
                cartItemID={item._id}
                productID={item.product._id}
                handleRemove={handleRemove}
              />
            ))}
          </ListWrapper>
          <Shipping
            handleSelectShipping={handleSelectShipping}
            shippingOption={shippingOption}
          />
          <DiscountCode handleDiscount={handleDiscount} />
          <CartFooter total={total} />
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
