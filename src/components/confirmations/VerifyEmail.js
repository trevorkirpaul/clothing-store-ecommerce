import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import styled from 'styled-components';

const Wrapper = styled.div`
  const: 25px;
  margin: 10px;
  padding: 25px;
  text-align: center;
  border: 1px solid #383838;
  background: #e8e8e8;
  color: #383838;
`;
const TextWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  margin-bottom: 25px;
  line-height: 1.8em;
`;
const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 3em;
  font-weight: 300;
`;
const SubTitle = styled.h3`
  font-family: 'Roboto', sans-serif;
`;
const BodyText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
`;

export default ({ verifyEmail, handleVerify }) => {
  return (
    <Wrapper>
      <Title>Verify Email</Title>
      <TextWrapper>
        <SubTitle>The Final Step</SubTitle>
        <BodyText>
          After verifying your email, you will be able to use the DIRTY RICH
          website.
        </BodyText>
        <BodyText>
          Please note that this is a portfolio project and is not an actual
          clothing store. This is a fully functional site, however, using
          mongoDB to track users' shopping carts and orders.
        </BodyText>
        <BodyText>
          Users' emails are only used to verify accounts and to recieve order
          confirmations. They are not used for any other purpose. As mentioned
          earlier, please use a dummy email account or the test account for this
          site to be safe.
        </BodyText>
        <RaisedButton label="Verify Email" onClick={handleVerify} />
      </TextWrapper>
    </Wrapper>
  );
};
