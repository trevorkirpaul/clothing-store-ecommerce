import React from 'react';

export default ({ name, handleRemove, cartItemID, color, size, quantity }) => {
  return (
    <li>
      <p>Product Name: {name}</p>
      <p>Color: {color} </p>
      <p>Size: {size}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={() => handleRemove(cartItemID)}>Remove</button>
    </li>
  );
};
