import React from 'react';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';

const Wrapper = styled.div`
  background: #9e9e9e;
  padding: 25px;
  display: flex;
  justify-content: space-around;
`;

export default ({ total, discount, shipping }) => {
  // check if discount code is valid or exists
  const modifyPrice = discount.codePhrase === null ? 1 : discount.amount;
  return (
    <Wrapper>
      <div>
        <h3>ESTIMATION:</h3>
        <p>order: ${total}</p>
        {discount.codePhrase !== null && (
          <p>
            discount code: {discount.codePhrase} for {discount.amount * 100}%
          </p>
        )}
        {shipping !== '' && <p>shipping: {shipping}</p>}
      </div>
      <div>
        <h3>Total: ${total * modifyPrice}</h3>
        <RaisedButton label="Proceed to checkout" />
      </div>
    </Wrapper>
  );
};
