import React from 'react';
import { PROD_IMAGE } from '../../config';
import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';

const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 15px;
  border: 1px solid #383838;
`;
const IMG = styled.img`
  width: 250px;
  height: 200px;
  object-fit: cover;
`;
export default ({
  name,
  price,
  handleRemove,
  cartItemID,
  color,
  size,
  quantity,
  imagePath,
}) => {
  return (
    <Wrapper>
      <div>
        <IMG src={`${PROD_IMAGE}${imagePath}`} />
      </div>
      <div>
        <p>Product Name: {name}</p>
        <p>Color: {color} </p>
        <p>Size: {size}</p>
      </div>
      <div>
        <p>Quantity: {quantity}</p>
        <p>Price: ${price}</p>
        <FlatButton label="Remove" onClick={() => handleRemove(cartItemID)} />
      </div>
    </Wrapper>
  );
};
