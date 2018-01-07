import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid palevioletred;
  padding: 15px;
  margin: 10px;
  font-family: 'Roboto', sans-serif;
  color: #383838;
`;

export default ({ name, color, price, quantity }) => {
  return (
    <Wrapper>
      <p>name: {name}</p>
      <p>color: {color}</p>
      <p>quantity: {quantity}</p>
      <p>price: {price}</p>
    </Wrapper>
  );
};
