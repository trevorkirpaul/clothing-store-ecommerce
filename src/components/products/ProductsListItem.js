import React from 'react';
import { Link } from 'react-router-dom';
import { PROD_IMAGE } from '../../config';
import styled from 'styled-components';

const Wrapper = styled.div`
  /* text-decoration: none; */
  padding: 0;
  margin: 0;
  position: relative;
`;

const Title = styled.h2`
  display: inline-block;
  background: #f8f8f8;
  padding: 5px 10px;
  color: #383838;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 2em;
  margin: 0;
  /* text-decoration: none; */
`;

const IMG = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  /* margin-bottom: 10px; */
  /* height: 100%; */
`;
const LINK = styled(Link)`
  text-decoration: none;
`;
const Details = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 20%;
  left: 20%;
`;

export default ({ id, name, image, price }) => {
  return (
    <LINK to={`/product/${id}`}>
      <Wrapper>
        <IMG src={`${PROD_IMAGE}${image}`} />
        <Details>
          <Title>{name}</Title>
        </Details>
      </Wrapper>
    </LINK>
  );
};
