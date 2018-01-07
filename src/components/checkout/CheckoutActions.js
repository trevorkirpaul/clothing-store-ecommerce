import React from 'react';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

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
        <Link to="/cart">
          <RaisedButton label="Go Back" />
        </Link>
      </Panel>
    </Wrapper>
  );
};
