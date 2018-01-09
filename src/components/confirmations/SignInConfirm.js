import React from 'react';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
const Wrapper = styled(Paper)`
  padding: 25px;
  max-width: 900px;
  margin: 10px auto;
  color: #383838;
`;
const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 3em;
`;
const BodyText = styled.p`
  font-family: 'Roboto', sans-serif;
`;

export default () => {
  return (
    <Wrapper>
      <Title>Welcome!</Title>
      <BodyText>You have successfully signed in!</BodyText>
      <div>
        <Link to="/products">
          <FlatButton label="View Products" />
        </Link>
      </div>
      <div>
        <Link to="/cart">
          <FlatButton label="View Cart" />
        </Link>
      </div>
    </Wrapper>
  );
};
