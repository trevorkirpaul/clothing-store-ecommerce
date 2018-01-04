import React from 'react';
import { Link } from 'react-router-dom';
import { PROD_IMAGE } from '../../config';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';

const Wrapper = styled(Paper)`
  margin: 15px 5px;
  padding: 25px;
  /* text-decoration: none; */
`;

const Title = styled.h2`
  color: #383838;
  font-family: 'Permanent Marker', cursive;
  font-weight: 400;
  font-size: 2em;
  margin: 0;
  /* text-decoration: none; */
`;
// const Price = styled.span`
//   /* text-decoration: none; */
//   font-size: 2em;
//   font-family: 'Permanent Marker', cursive;
//   font-weight: 400;
// `;
const IMG = styled.img`
  width: 100%;
  margin-bottom: 10px;
  /* height: 100%; */
`;
const LINK = styled(Link)`
  text-decoration: none;
`;
const Details = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
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
