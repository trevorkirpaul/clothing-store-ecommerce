import React from 'react';
import ProductForm from './ProductForm';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
const Wrapper = styled.div`
  max-width: 900px;
  margin: 10px auto;
`;
const Panel = styled(Paper)`
  padding: 25px;
`;
const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
`;
export default ({ name, price, sizesAvail, colorsAvail, onSubmit }) => {
  return (
    <Wrapper>
      <Panel>
        <Title>{name}</Title>
        <p>Price: {price}</p>
      </Panel>
      <ProductForm
        onSubmit={onSubmit}
        sizes={sizesAvail}
        colors={colorsAvail}
      />
    </Wrapper>
  );
};
