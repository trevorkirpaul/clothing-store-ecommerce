import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../actions/auth';

export const SignOut = ({ signOut }) => {
  return (
    <div>
      <p>Are you sure you want to sign out?</p>
      <button onClick={() => signOut()}>Sign Out!</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
});

export default connect(null, mapDispatchToProps)(SignOut);
