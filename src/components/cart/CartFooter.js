import React from 'react';
import styled from 'styled-components';
import CheckoutButton from './CheckoutButton';
import { ScreenSize } from '../../config';
const mobile = ScreenSize.mobile;

const Wrapper = styled.div`
  background: #9e9e9e;
`;
const InnerWrap = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  padding: 25px;
  justify-content: space-between;
  @media (max-width: ${mobile}) {
    flex-direction: column;
    /* text-align: center; */
  }
`;
const Title = styled.h3`
  font-family: 'Roboto', sans-serif;
  color: #383838;
`;
const BodyText = styled.p`
  color: #383838;
  font-family: 'Roboto', sans-serif;
`;
const RightPane = styled.div`
  text-align: right;
`;

export default ({ total, discount, shipping, history }) => {
  // check if discount code is valid or exists
  const modifyPrice = discount.amount === 1 ? 0 : discount.amount;
  const price = shipping ? shipping.price : 0;

  return (
    <Wrapper>
      <InnerWrap>
        <div>
          <Title>ESTIMATION:</Title>
          <BodyText>order: ${total}</BodyText>
          {discount.codePhrase !== null && (
            <BodyText>
              discount code: {discount.codePhrase} for {discount.amount * 100}%
            </BodyText>
          )}
          {shipping && (
            <BodyText>
              shipping: {shipping.name} for ${shipping.price}
            </BodyText>
          )}
        </div>
        <RightPane>
          <Title>Final Price: ${total - total * modifyPrice + price}</Title>

          <CheckoutButton shipping={shipping} />
        </RightPane>
      </InnerWrap>
    </Wrapper>
  );
};
