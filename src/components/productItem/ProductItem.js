import React from 'react';
import ProductForm from './ProductForm';
import styled from 'styled-components';

import { PROD_IMAGE, ScreenSize } from '../../config';

const mobile = ScreenSize.mobile;

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0px auto;
`;
const Panel = styled.div`
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #383838;
  background: #e8e8e8;
  margin: 0;
  @media (max-width: ${mobile}) {
    display: block;
    text-align: center;
    padding: 15px;
    margin: 0;
  }
`;
const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  @media (max-width: ${mobile}) {
    display: inline-block;
    margin: 0 0 5px 0;
    padding-bottom: 5px;
    border-bottom: 2px solid #383838;
  }
`;
const PriceText = styled.h2`
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 5px;
  font-weight: 400;
`;
const IMG = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  @media (max-width: ${mobile}) {
    width: 100%;
    heigth: 200px;
    object-fit: cover;
  }
`;

export default ({
  name,
  price,
  sizesAvail,
  colorsAvail,
  imagePath,
  onSubmit,
}) => {
  return (
    <Wrapper>
      <IMG src={`${PROD_IMAGE}${imagePath}`} />
      <Panel>
        <Title>{name}</Title>
        <PriceText>Price: ${price}</PriceText>
      </Panel>
      <ProductForm
        onSubmit={onSubmit}
        sizes={sizesAvail}
        colors={colorsAvail}
      />
    </Wrapper>
  );
};
