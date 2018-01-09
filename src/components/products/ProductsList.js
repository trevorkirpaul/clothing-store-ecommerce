import React from 'react';
import ProductsListItem from './ProductsListItem';
import styled from 'styled-components';

const Wrapper = styled.div``;
const ListWrapper = styled.ul`
  padding: 0px;
  margin: 0;
  padding: 0;
  list-style: none;
  /* text-decoration: none; */
`;
const TitlePanel = styled.div`
  padding: 25px;
  background: #f2b9b9;

  text-align: center;
`;
const Title = styled.h1`
  /* font-family: 'Roboto', sans-serif; */
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #383838;
  font-size: 3em;
  margin: 0;
`;
export default ({ products }) => {
  return (
    <Wrapper>
      <TitlePanel>
        <Title>2018 Catalog</Title>
      </TitlePanel>
      <ListWrapper>
        {products.map(item => (
          <ProductsListItem
            key={item._id}
            name={item.name}
            id={item._id}
            price={item.price}
            image={item.imagePath}
          />
        ))}
      </ListWrapper>
    </Wrapper>
  );
};
