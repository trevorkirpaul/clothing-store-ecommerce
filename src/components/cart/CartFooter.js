import React from 'react';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';

const Wrapper = styled.div`
  background: #9e9e9e;
  padding: 25px;
  display: flex;
  justify-content: space-around;
`;

export default ({ total }) => {
  return (
    <Wrapper>
      <div>
        <h3>ESTIMATION:</h3>
        <p>order: ${total}</p>
      </div>
      <div>
        <h3>Total: ${total}</h3>
        <RaisedButton label="Proceed to checkout" />
      </div>
    </Wrapper>
  );
};
