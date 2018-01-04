import React from 'react';
import styled from 'styled-components';
import IMGsplash from '../../images/heroSplash1.jpeg';

const Banner = styled.div`
  background-image: url(${IMGsplash});
  background-position: center;
  background-size: cover;

  padding: 25px;
  margin: 0;
  height: 50vh;
`;
const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  color: #f7f7f7;
  font-size: 5em;
`;

const TextPanel = styled.div`
  background: #f7f7f7;
  height: 50vh;
  color: #383838;
  padding: 25px;
`;

export default () => {
  return (
    <div>
      <Banner>
        <Title>FASHION FASHION FASHION FASHION</Title>
      </Banner>
      <TextPanel>
        <p>new richmond clothing label</p>
      </TextPanel>
    </div>
  );
};
