import React from 'react';
import styled from 'styled-components';
import IMGsplash from '../../images/heroSplash1.jpeg';

const Wrapper = styled.div`
  margin-bottom: 35px;
`;

const TitleWrapper = styled.div`
  text-align: center;
  background: #e8e8e8;
`;
const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  color: #383838;

  display: inline-block;
  font-size: 5em;
  padding: 5px 10px;
  @media (max-width: 450px) {
    font-size: 2.5em;
    padding: 0;
  }
`;

const BodyWrapper = styled.div`
  padding: 15px;
`;
const SubTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  color: #383838;
  font-size: 2.5em;
  @media (max-width: 450px) {
    font-size: 1.5em;
  }
`;
const BodyText = styled.p`
  color: #383838;
  font-family: 'Roboto', sans-serif;
`;
const IMG = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  margin: 0;
  @media (max-width: 450px) {
    height: 150px;
  }
`;

export default () => {
  return (
    <Wrapper>
      <IMG src={IMGsplash} />
      <TitleWrapper>
        <Title>RICHMOND FASHION</Title>
      </TitleWrapper>
      <BodyWrapper>
        <SubTitle>The Latest Trends</SubTitle>
        <BodyText>
          You won't find a better look this season! Offering the best local
          artists
        </BodyText>
        <SubTitle>Check Out The Spring Catalog</SubTitle>
        <BodyText>
          Winter is barely over and it's freezing cold but who cares!?
        </BodyText>
      </BodyWrapper>
    </Wrapper>
  );
};
