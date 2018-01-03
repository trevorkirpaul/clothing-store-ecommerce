import React from 'react';

export default ({ name, handleRemove, cartItemID }) => {
  return (
    <li>
      <p>{name}</p>
      <button onClick={() => handleRemove(cartItemID)}>Remove</button>
    </li>
  );
};
