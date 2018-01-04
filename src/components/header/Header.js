import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

const style = {
  color: '#f8f8f8',
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5px 5px;
  background: #383838;
`;

export default ({ loggedIn }) => {
  if (!loggedIn) {
    return (
      <Wrapper>
        <Link to="/">
          <FlatButton label="Dirty Rich" />
        </Link>
        <Link to="/products">
          <FlatButton label="Products" style={style} />
        </Link>
        <Link to="/signin">
          <FlatButton label="Sign In" style={style} />
        </Link>
      </Wrapper>
    );
  } else if (loggedIn) {
    return (
      <Wrapper>
        <Link to="/">
          <FlatButton label="Dirty Rich" style={style} />
        </Link>
        <Link to="/products">
          <FlatButton label="Products" style={style} />
        </Link>
        <Link to="/signout">
          <FlatButton label="Sign Out" style={style} />
        </Link>
        <Link to="/cart">
          <FlatButton label="Shopping Cart" style={style} />
        </Link>
      </Wrapper>
    );
  }
};
