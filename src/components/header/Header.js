import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 25px;
  margin: 10px auto;
  max-width: 500px;
`;

export default ({ loggedIn }) => {
  return (
    <Wrapper>
      <Link to="/">
        <span>home</span>
      </Link>
      {!loggedIn ? (
        <Link to="/signin">
          <span>Sign In</span>
        </Link>
      ) : (
        <Link to="/signout">
          <span>Sign Out</span>
        </Link>
      )}
    </Wrapper>
  );
};
