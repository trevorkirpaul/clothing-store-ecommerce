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
      message: '',
    };
  }
  handleSubmit = () => {
    this.props.handleDiscount(this.state.codePhrase);
  };
  handleChangeCodePhrase = e => {
    const codePhrase = e.target.value;
    this.setState(() => ({
      codePhrase,
    }));
  };
  render() {
    return (
      <Wrapper>
        <div>
          <Title>Discount Code</Title>
          <BodyText>Enter a secret code to get a secret discount</BodyText>
        </div>
        <div>
          <div>
            <TextField
              hintText="enter code"
              onChange={this.handleChangeCodePhrase}
            />
            <FlatButton label="check" onClick={this.handleSubmit} />
          </div>
        </div>
      </Wrapper>
    );
  }
}
