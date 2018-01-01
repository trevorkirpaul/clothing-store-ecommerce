import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <p>404 error</p>
      <p>page not found</p>
      <Link to="/">
        <p>go back...</p>
      </Link>
    </div>
  );
};
