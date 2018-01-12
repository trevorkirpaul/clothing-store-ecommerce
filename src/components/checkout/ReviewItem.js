import React from 'react';
import styled from 'styled-components';
import { ScreenSize } from '../../config';
const mobile = ScreenSize.mobile;

const Wrapper = styled.div`
  border: 1px solid palevioletred;
  padding: 15px;
  margin: 10px;
  font-family: 'Roboto', sans-serif;
  color: #383838;
  @media (max-width: ${mobile}) {
    text-align: center;
  }
`;

const BoldText = styled.span`
  font-weight: 600;
`;

export default ({ name, color, price, quantity }) => {
  return (
    <Wrapper>
      <p>
        <BoldText>name:</BoldText> {name}
      </p>
      <p>
        <BoldText>color:</BoldText> {color}
      </p>
      <p>
        <BoldText>quantity:</BoldText> {quantity}
      </p>
      <p>
        <BoldText>price:</BoldText> {price}
      </p>
    </Wrapper>
  );
};
