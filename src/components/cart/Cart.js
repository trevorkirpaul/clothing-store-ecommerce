import React from 'react';
import CartItem from './CartItem';
import CircularProgress from 'material-ui/CircularProgress';
import styled from 'styled-components';

const ListWrapper = styled.ul`
  list-style: none;
  max-width: 900px;
  margin: 10px auto;
  padding: 5px;
`;
const Wrapper = styled.div`
  padding: 25px;
  text-align: center;
`;

const Title = styled.h1`
  color: #383838;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
`;

export default ({ cart, handleRemove }) => {
  if (cart.loading === true) {
    return (
      <Wrapper>
        <CircularProgress />
      </Wrapper>
    );
  } else if (cart.contents) {
    if (cart.contents.length === 0) {
      // if no items in cart
      return (
        <Wrapper>
          <Title>No Items In Cart</Title>
        </Wrapper>
      );
    } else if (cart.contents.length > 0) {
      // if items in cart
      return (
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
      );
    }
  } else {
    return (
      <Wrapper>
        <CircularProgress />
      </Wrapper>
    );
  }
};
