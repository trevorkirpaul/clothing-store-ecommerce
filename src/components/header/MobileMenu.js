import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/svg-icons/navigation/menu';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  handleToggle = () => this.setState({ open: !this.state.open });
  handleClose = () => this.setState({ open: false });

  render() {
    const { signedIn } = this.props;
    return (
      <div>
        <Menu color={'#f8f8f8'} onClick={this.handleToggle} />
        <Drawer
          docked={false}
          width={'50%'}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <StyledLink to="/" onClick={this.handleClose}>
            <MenuItem>Home</MenuItem>
          </StyledLink>
          <StyledLink to="/products" onClick={this.handleClose}>
            <MenuItem>Products</MenuItem>
          </StyledLink>

          {signedIn ? (
            <div>
              <StyledLink to="/cart" onClick={this.handleClose}>
                <MenuItem>Shopping Cart</MenuItem>
              </StyledLink>
              <StyledLink to="/signout" onClick={this.handleClose}>
                <MenuItem>Sign Out</MenuItem>
              </StyledLink>
            </div>
          ) : (
            <div>
              <StyledLink to="/signin" onClick={this.handleClose}>
                <MenuItem>Sign In</MenuItem>
              </StyledLink>
              <StyledLink to="/signup" onClick={this.handleClose}>
                <MenuItem>Sign Up</MenuItem>
              </StyledLink>
            </div>
          )}
        </Drawer>
      </div>
    );
  }
}
