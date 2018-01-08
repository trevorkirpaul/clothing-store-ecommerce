import React from 'react';

import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';

const Wrapper = styled.div`
  padding: 25px;
  max-width: 900px;
  margin: 10px auto;
  border: 1px solid #383838;
  background: #e8e8e8;
  text-align: center;
`;

const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #383838;
`;
const BodyText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: #383838;
`;

export default ({ signOut }) => {
  return (
    <Wrapper>
      <Title>Sign Out</Title>
      <BodyText>Are you sure you want to sign out?</BodyText>

      <RaisedButton label="Sign out" onClick={() => signOut()} />
    </Wrapper>
  );
};
