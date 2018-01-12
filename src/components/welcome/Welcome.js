import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import HeartIcon from 'material-ui/svg-icons/action/favorite';
import HappyIcon from 'material-ui/svg-icons/social/mood';
import Hero1 from '../../images/heroSplash3.jpeg';
import { ScreenSize } from '../../config';
const mobile = ScreenSize.mobile;

const Wrapper = styled.div`
  margin-bottom: 35px;
  /* max-width: 1200px; */
  margin: 0 auto;
  @media (min-width: 1050px) {
  }
`;

const HeroPanel = styled.div`
  display: flex;
  @media (max-width: ${mobile}) {
    flex-direction: column;
  }
`;
const PanelLeft = styled.div`
  /* width: 50%; */
  flex: 1;
  padding: 25px;
  backgroun: #e8e8e8;
`;
const PanelRight = styled.div`
  flex: 1;
`;
const HeroTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
  color: #383838;
  font-size: 3em;
`;
const HeroBody = styled.h3`
  font-family: 'Roboto', sans-serif;
  color: #383838;
  font-size: 1.5em;
  font-weight: 400;
`;
const HeroIMG = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const MiddlePanel = styled.div`
  background: #383838;
  margin: 0;
  text-align: center;
  padding: 25px;
`;
const MiddleTitle = styled.h2`
  color: #f8f8f8;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 2em;
`;
const TextWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;
const MiddleBody = styled.p`
  color: #f8bbd0;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
`;
export default () => {
  return (
    <Wrapper>
      <HeroPanel>
        <PanelLeft>
          <HeroTitle>Richmond Fashion</HeroTitle>
          <HeroBody>
            Vegan clothing for the minimalist spirit of Richmond
          </HeroBody>
          <Link to="/products">
            <RaisedButton
              icon={<HeartIcon />}
              label="view products"
              secondary={true}
            />
          </Link>
        </PanelLeft>
        <PanelRight>
          <HeroIMG src={Hero1} />
        </PanelRight>
      </HeroPanel>
      <MiddlePanel>
        <TextWrapper>
          <MiddleTitle>A Portfolio Project</MiddleTitle>
          <MiddleBody>
            My name is Trevor Kirpaul and I created this as a way to showcase my
            skills with React, Redux Node and a few other tools for modern web
            development.
          </MiddleBody>
          <a
            href="https://github.com/trevorkirpaul"
            rel="noopener noreferrer"
            target="_blank"
          >
            <RaisedButton icon={<HappyIcon />} label="view my github" />
          </a>
        </TextWrapper>
      </MiddlePanel>
    </Wrapper>
  );
};
