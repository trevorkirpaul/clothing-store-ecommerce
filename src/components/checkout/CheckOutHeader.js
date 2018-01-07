import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 25px;
  background: #e8e8e8;
`;
const Panel = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;
const Title = styled.h1`
  color: #383838;
`;
const Emph = styled.span`
  font-weight: 700;
  border-bottom: 1px solid #383838;
  padding-bottom: 5px;
`;

export default ({ total }) => {
  if (total) {
    return (
      <Wrapper>
        <Panel>
          <Title>Check Out</Title>
          <p>
            Final Price(including discount): <Emph>${total}</Emph>
          </p>
        </Panel>
      </Wrapper>
    );
  } else if (!total) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }
};
