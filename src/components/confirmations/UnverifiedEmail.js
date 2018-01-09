import React from 'react';
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
export default () => {
  return (
    <Wrapper>
      <Title>Please Verify Your Account</Title>
      <TextWrapper>
        <BodyText>
          You are seeing this message because you haven't verified your
          account's email address.
        </BodyText>
        <BodyText>
          Please check your email for a link to activiate your account.
        </BodyText>
        <SubTitle>This site is a portfolio project</SubTitle>
        <BodyText>
          Most likely you are just testing this site out and don't want to use a
          real email address. There is a dummy account available for the purpose
          of quickly testing the site.
        </BodyText>
        <SubTitle>Dummy Account Credentials</SubTitle>
        <BodyText>email: 'admin'</BodyText>
        <BodyText>password: 'pass'</BodyText>
      </TextWrapper>
    </Wrapper>
  );
};
