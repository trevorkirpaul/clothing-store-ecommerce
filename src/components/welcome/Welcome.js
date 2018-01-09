import React from 'react';
import styled from 'styled-components';
import IMGsplash from '../../images/heroSplash1.jpeg';

const Banner = styled.div`
  background-image: url(${IMGsplash});
  background-position: center;
  background-size: cover;
  text-align: center;
  padding: 25px;
  margin: 0;
  height: 50vh;
`;
const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  color: #383838;
  background: white;
  display: inline-block;
  font-size: 5em;
  padding: 5px 10px;
`;
const SubTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  color: #383838;
  font-size: 2.5em;
`;
const BodyText = styled.p`
  color: #383838;
  font-family: 'Roboto', sans-serif;
`;

const QuoteText = styled.p`
  color: #383838;
  font-family: 'Roboto', sans-serif;
  font-size: 1.2em;
  font-weight: 600;
`;

const TextPanel = styled.div`
  background: #f7f7f7;
  height: 50vh;
  color: #383838;
  padding: 25px;
`;
const TextWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export default () => {
  return (
    <div>
      <Banner>
        <Title>RICHMOND FASHION</Title>
      </Banner>
      <TextPanel>
        <TextWrapper>
          <SubTitle>We Create Trends</SubTitle>
          <BodyText>
            DIRTY RICH employs thousands of 'Fashion Agents' world-wide to find
            the latest styles to inspire our designers. You can ask Derek
            Zoolander about us.
          </BodyText>
          <BodyText>
            Kanye West exclusivley wears DIRTY RICH and has stated on record
            that it has inspired the early part of his career.
          </BodyText>
          <QuoteText>"I wear clothes, sometimes DIRTY RICH" -Yeezy</QuoteText>
          <BodyText>
            Check out our limited items and order now before they're gone
            forever.
          </BodyText>
        </TextWrapper>
      </TextPanel>
    </div>
  );
};
