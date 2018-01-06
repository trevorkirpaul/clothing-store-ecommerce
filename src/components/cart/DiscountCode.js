import React, { Component } from 'react';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const Wrapper = styled.div`
  padding: 25px;
  margin: 0;
  background: #f2b9b9;
  display: flex;
  justify-content: space-around;
`;
const Title = styled.h3`
  font-family: 'Roboto', sans-serif;
  color: #383838;
`;
const BodyText = styled.p`
  color: #383838;
`;

export default class DiscountCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codePhrase: '',
      amount: 1,
      message: '',
    };
  }
  handleSubmit = () => {
    const codePhrase = this.state.codePhrase;
    codePhrase !== '' && this.props.handleDiscount(codePhrase);
  };
  handleChangeCodePhrase = e => {
    const codePhrase = e.target.value;
    this.setState(() => ({
      codePhrase,
    }));
  };
  handleRemoveCode = () => {
    this.setState(() => ({
      codePhrase: '',
      amount: 1,
    }));
    this.props.handleRemove();
  };

  componentWillReceiveProps(nextProps) {
    const codePhrase = nextProps.info.codePhrase;
    const amount = nextProps.info.amount;
    if (codePhrase !== null) {
      this.setState(() => ({
        codePhrase,
        amount,
      }));
    } else if (codePhrase === null) {
      this.setState({
        amount: 1,
        codePhrase: '',
      });
    }
  }
  render() {
    const { codePhrase, amount } = this.state;
    return (
      <Wrapper>
        <div>
          <Title>Discount Code</Title>
          <BodyText>Enter a secret code to get a secret discount</BodyText>
        </div>
        <div>
          <div>
            {amount !== 1 ? (
              <div>
                <p>valid code being used: {codePhrase}</p>
                <p>discount amount: {amount * 100}%</p>
                <FlatButton
                  label="remove code"
                  onClick={this.handleRemoveCode}
                />
              </div>
            ) : (
              <div>
                <TextField
                  hintText="enter code"
                  onChange={this.handleChangeCodePhrase}
                />
                <FlatButton label="check" onClick={this.handleSubmit} />
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    );
  }
}
