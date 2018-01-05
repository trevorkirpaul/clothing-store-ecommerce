import React from 'react';
// import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 25px;
  margin: 0;
  background: #e8e8e8;
  display: flex;
  justify-content: space-around;
`;

const BodyText = styled.p``;

const Title = styled.h3`
  font-family: 'Roboto', sans-serif;
  color: #383838;
`;

export default ({ handleSelectShipping, shippingOption }) => {
  return (
    <Wrapper>
      <div>
        <Title>Shipping Options</Title>
        <BodyText>
          Please select the best way we can send you these amazing products
        </BodyText>
      </div>
      <div>
        <SelectField
          floatingLabelText="select shipping..."
          value={shippingOption}
          onChange={handleSelectShipping}
        >
          <MenuItem value={'2 day'} primaryText="2 day" />
          <MenuItem value={'teleport'} primaryText="Teleporter (instant)" />
          <MenuItem value={'UPS 7 day'} primaryText="UPS 7 day" />
        </SelectField>
      </div>
    </Wrapper>
  );
};
