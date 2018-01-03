import React from 'react';
import { Link } from 'react-router-dom';

export default ({ id, name }) => {
  return (
    <li>
      <Link to={`/product/${id}`}>
        <p>name: {name}</p>
      </Link>
    </li>
  );
};
