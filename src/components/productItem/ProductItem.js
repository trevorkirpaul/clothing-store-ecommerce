import React from 'react';
import ProductForm from './ProductForm';
import styled from 'styled-components';
import StarIcon from 'material-ui/svg-icons/toggle/star';

import { PROD_IMAGE, ScreenSize } from '../../config';

const mobile = ScreenSize.mobile;

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0px auto;
`;
const IconWrapper = styled.div`
  text-align: center;
  @media (min-width: ${mobile}) {
    display: none;
  }
`;
const Panel = styled.div`
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #383838;
  /* background: #e8e8e8; */
  margin: 0;
  border-bottom: 1px solid #383838;
  @media (max-width: ${mobile}) {
    display: block;
    text-align: center;
    padding: 15px;
    /* margin: 0 20px; */
    border: none;
  }
`;
const LowerPanel = styled.div`
  display: flex;
  @media (max-width: ${mobile}) {
    flex-direction: column;
  }
`;
const BodyWrapper = styled.div`
  color: #383838;
  line-height: 1.5em;
  max-width: 450px;
  padding-left: 25px;
  padding-top: 20px;
  margin: 0 auto 0 0;
  @media (max-width: ${mobile}) {
    padding: 15px;
    text-align: center;
  }
`;
const BodyHeader = styled.h3`
  font-family: 'Roboto', sans-serif;
`;
const BodyText = styled.p`
  font-family: 'Roboto', sans-serif;
`;
const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  @media (max-width: ${mobile}) {
    display: inline-block;
    margin: 0 0 5px 0;
    padding-bottom: 5px;
    border-bottom: 2px solid #383838;
  }
`;
const PriceText = styled.h2`
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 5px;
  font-weight: 400;
`;
const IMG = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  @media (max-width: ${mobile}) {
    width: 100%;
    heigth: 200px;
    object-fit: cover;
  }
`;

// SVGicon style
const styleOpt = {
  color: '#383838',
  margin: '1em 0',
};

export default ({
  name,
  price,
  sizesAvail,
  colorsAvail,
  imagePath,
  onSubmit,
  userID,
}) => {
  return (
    <Wrapper>
      <IMG src={`${PROD_IMAGE}${imagePath}`} />
      <Panel>
        <Title>{name}</Title>
        <PriceText>Price: ${price}</PriceText>
      </Panel>
      <LowerPanel>
        <BodyWrapper>
          <IconWrapper>
            <StarIcon style={styleOpt} />
          </IconWrapper>
          <BodyHeader>Description:</BodyHeader>
          <BodyText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
            architecto quaerat laboriosam? Autem consequatur, nostrum aut
            blanditiis perspiciatis distinctio, non assumenda quis debitis illum
            ea fuga velit qui odit ad iusto laudantium cumque sint beatae!
          </BodyText>
        </BodyWrapper>
        <ProductForm
          onSubmit={onSubmit}
          sizes={sizesAvail}
          colors={colorsAvail}
          userID={userID}
        />
      </LowerPanel>
    </Wrapper>
  );
};
