import React from 'react';
import styled from 'styled-components';
import ReviewItem from './ReviewItem';

const Wrapper = styled.div`
  padding: 25px;
  backgroun: #e8e8e8;
`;
const Panel = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export default ({ cart }) => {
  if (cart) {
    return (
      <Wrapper>
        <Panel>
          <List>
            {cart.map(item => (
              <ReviewItem
                key={item._id}
                name={item.productName}
                color={item.color}
                price={item.price}
                quantity={item.quantity}
              />
            ))}
          </List>
        </Panel>
      </Wrapper>
    );
  } else {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }
};
