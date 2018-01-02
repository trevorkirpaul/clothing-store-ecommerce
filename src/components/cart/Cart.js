import React from 'react';

export default ({ cart }) => {
  if (cart.loading === true) {
    return (
      <div>
        <p>loading cart...</p>
      </div>
    );
  } else if (cart.contents) {
    return (
      <div>
        <p>Items in cart: {cart.contents.length}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }
};
