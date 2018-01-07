import React from 'react';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';

const Wrapper = styled.div`
  padding: 25px;
  backgroun: #e8e8e8;
`;
const Panel = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

export default ({ handleSubmit }) => {
  return (
    <Wrapper>
      <Panel>
        <RaisedButton label="Submit Order" onClick={handleSubmit} />
        <RaisedButton label="Go Back" />
      </Panel>
    </Wrapper>
  );
};
