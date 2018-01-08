import React from 'react';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 25px;
  background: #e8e8e8;
  color: #383838;
  text-align: center;
`;
const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
`;

export default () => {
  return (
    <Wrapper>
      <Title>Thank You</Title>
      <p>We truly appreciate your order!</p>
      <Link to="/">
        <RaisedButton label="go home" />
      </Link>
    </Wrapper>
  );
};
