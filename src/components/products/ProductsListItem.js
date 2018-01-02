import React from 'react';

export default ({ id, name, handleAdd }) => {
  return (
    <li>
      <p>name: {name}</p>

      <button onClick={() => handleAdd(id, name)}>Add to cart</button>
    </li>
  );
};
