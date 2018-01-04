import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 25px;
  background: #e8e8e8;
  text-align: center;
`;
const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: #383838;
`;
const SubTitle = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: #383838;
`;

export default ({ cart, total }) => {
  return (
    <Wrapper>
      <Title>Your Shopping Cart</Title>
      <SubTitle>
        Review of {cart.length} items ${total}
      </SubTitle>
    </Wrapper>
  );
};
