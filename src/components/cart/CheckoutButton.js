import React, { Component } from 'react';
import { withRouter } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

export class CheckoutButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  handleNav = () => {
    if (this.props.shipping) {
      this.props.history.push('/checkout');
    } else {
      this.setState({ open: true });
    }
  };
  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  render() {
    const actions = [<FlatButton label="okay" onClick={this.handleClose} />];
    return (
      <div>
        <RaisedButton label="Proceed to checkout" onClick={this.handleNav} />
        <Dialog
          title="Select Shipping to Proceed"
          modal={false}
          actions={actions}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Please select a shipping option...
        </Dialog>
      </div>
    );
  }
}

export default withRouter(CheckoutButton);
