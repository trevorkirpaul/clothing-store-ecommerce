import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

export const Container = ({ auth }, props) => {
  return <Header {...props} loggedIn={!!auth.token} />;
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Container);
