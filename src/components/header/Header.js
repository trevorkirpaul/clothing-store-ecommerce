import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import FlatButton from 'material-ui/FlatButton';

const style = {
  color: '#f8f8f8',
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5px 5px;
  background: #383838;

  @media (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const FullSizeActions = styled.div`
  @media (max-width: 450px) {
    display: none;
  }
`;

const MobileActions = styled.div`
  @media (min-width: 450px) {
    display: none;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 15px;
`;

export default ({ loggedIn }) => {
  if (!loggedIn) {
    return (
      <Wrapper>
        <FullSizeActions>
          <Link to="/">
            <FlatButton label="Home" style={style} />
          </Link>
          <Link to="/products">
            <FlatButton label="Products" style={style} />
          </Link>
          <Link to="/signin">
            <FlatButton label="Sign In" style={style} />
          </Link>
          <Link to="/signup">
            <FlatButton label="Sign Up" style={style} />
          </Link>
        </FullSizeActions>
        <MobileActions>
          <Link to="/">
            <FlatButton label="Dirty Rich" style={style} />
          </Link>
          <MobileMenu signedIn={false} />
        </MobileActions>
      </Wrapper>
    );
  } else if (loggedIn) {
    return (
      <Wrapper>
        <FullSizeActions>
          <Link to="/">
            <FlatButton label="home" style={style} />
          </Link>
          <Link to="/products">
            <FlatButton label="Products" style={style} />
          </Link>
          <Link to="/signout">
            <FlatButton label="Sign Out" style={style} />
          </Link>
          <Link to="/cart">
            <FlatButton label={`Shopping Cart`} style={style} />
          </Link>
        </FullSizeActions>
        <MobileActions>
          <Link to="/">
            <FlatButton label="Dirty Rich" style={style} />
          </Link>
          <MobileMenu signedIn={true} />
        </MobileActions>
      </Wrapper>
    );
  }
};
