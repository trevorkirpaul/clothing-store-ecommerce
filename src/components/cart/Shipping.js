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

export default ({ handleSelectShipping, options, currentOpt }) => {
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
          value={currentOpt && currentOpt.index}
          onChange={handleSelectShipping}
        >
          {options &&
            options.map((item, index) => (
              <MenuItem key={item.name} value={index} primaryText={item.name} />
            ))}
        </SelectField>
      </div>
    </Wrapper>
  );
};
