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
      <Title>Account Created!</Title>
      <SubTitle>Please Check Your Email</SubTitle>
      <TextWrapper>
        <BodyText>
          Thank you for creating an account! This web site is a portfolio
          project that I created to showcase my skills with React, Redux,
          Express, MongoDB and other modern web development tools.
        </BodyText>
        <BodyText>You can view the source code for this project here.</BodyText>
        <BodyText>
          To begin using this site, check your email for a verification link.
          After using the link your account will be verified.
        </BodyText>
      </TextWrapper>
      <SubTitle>
        Please note that this is a portfolio project and you are not actually
        buying anything.
      </SubTitle>
    </Wrapper>
  );
};
