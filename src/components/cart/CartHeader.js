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
  margin: 0 0 15px 0;
`;
const SubTitle = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: #383838;
  border-bottom: 2px solid #383838;
  margin: 0;
  padding-bottom: 15px;
  display: inline-block;
`;
const Bold = styled.span`
  font-weight: 600;
`;

export default ({ cart, total }) => {
  return (
    <Wrapper>
      <Title>Your Shopping Cart</Title>
      <SubTitle>
        Review of <Bold>{cart.length}</Bold> items <Bold>${total}</Bold>
      </SubTitle>
    </Wrapper>
  );
};
