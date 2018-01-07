import React from 'react';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  background: #9e9e9e;
  padding: 25px;
  display: flex;
  justify-content: space-around;
`;

export default ({ total, discount, shipping }) => {
  // check if discount code is valid or exists
  const modifyPrice = discount.codePhrase === null ? 1 : discount.amount;
  const price = shipping ? shipping.price : 0;
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
        {shipping && (
          <p>
            shipping: {shipping.name} for ${shipping.price}
          </p>
        )}
      </div>
      <div>
        <h3>Final Price: ${total - total * modifyPrice + price}</h3>
        <Link to="/checkout">
          <RaisedButton label="Proceed to checkout" />
        </Link>
      </div>
    </Wrapper>
  );
};
