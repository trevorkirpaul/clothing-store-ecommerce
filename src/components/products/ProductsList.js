import React from 'react';
import ProductsListItem from './ProductsListItem';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';

const Wrapper = styled.div``;
const ListWrapper = styled.ul`
  padding: 5px;
  max-width: 900px;
  margin: 10px auto;
  list-style: none;
  /* text-decoration: none; */
`;
const Panel = styled(Paper)`
  padding: 25px;
  max-width: 900px;
  margin: 10px auto;
  text-align: center;
`;
const Title = styled.h1`
  /* font-family: 'Roboto', sans-serif; */
  font-family: 'Permanent Marker', cursive;
  font-weight: 400;
  color: #383838;
  font-size: 3em;
  margin: 0;
`;
export default ({ products }) => {
  return (
    <Wrapper>
      <Panel>
        <Title>2018 Catalog</Title>
      </Panel>
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
