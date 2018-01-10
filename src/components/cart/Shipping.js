import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import styled from 'styled-components';
import { ScreenSize } from '../../config';
const mobile = ScreenSize.mobile;

const Wrapper = styled.div`
  background: #e8e8e8;
`;
const InnerWrap = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  padding: 25px;
  justify-content: space-between;
  @media (max-width: ${mobile}) {
    flex-direction: column;
  }
`;
const BodyText = styled.p``;

const Title = styled.h3`
  font-family: 'Roboto', sans-serif;
  color: #383838;
`;
const RightPane = styled.div`
  text-align: center;
  flex: 75%;
`;

export default ({ handleSelectShipping, options, currentOpt }) => {
  return (
    <Wrapper>
      <InnerWrap>
        <div>
          <Title>Shipping Options</Title>
          <BodyText>
            Please select the best way we can send you these amazing products
          </BodyText>
        </div>
        <RightPane>
          <SelectField
            floatingLabelText="select shipping..."
            value={currentOpt && currentOpt.index}
            onChange={handleSelectShipping}
          >
            {options &&
              options.map((item, index) => (
                <MenuItem
                  key={item.name}
                  value={index}
                  primaryText={item.name}
                />
              ))}
          </SelectField>
        </RightPane>
      </InnerWrap>
    </Wrapper>
  );
};
