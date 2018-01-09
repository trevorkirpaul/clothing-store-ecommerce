import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default ({ verifyEmail, handleVerify }) => {
  return (
    <div>
      <h1>Verify Email</h1>
      <RaisedButton label="Verify Email" onClick={handleVerify} />
    </div>
  );
};
