import React from 'react';
import ProductForm from './ProductForm';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import { PROD_IMAGE } from '../../config';

const Wrapper = styled.div`
  max-width: 900px;
  margin: 10px auto;
`;
const Panel = styled(Paper)`
  padding: 25px;
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
`;
const IMG = styled.img`
  width: 200px;
  heigth: 200px;
  object-fit: cover;
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
      <Panel>
        <div>
          <Title>{name}</Title>
          <p>Price: {price}</p>
        </div>
        <div>
          <IMG src={`${PROD_IMAGE}${imagePath}`} />
        </div>
      </Panel>
      <ProductForm
        onSubmit={onSubmit}
        sizes={sizesAvail}
        colors={colorsAvail}
      />
    </Wrapper>
  );
};
