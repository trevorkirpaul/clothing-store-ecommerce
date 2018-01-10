import React from 'react';
import { PROD_IMAGE, ScreenSize } from '../../config';
import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';
// import FontIcon from 'material-ui/FontIcon';
import ColorLens from 'material-ui/svg-icons/image/color-lens';
import Size from 'material-ui/svg-icons/image/straighten';
import NumberIcon from 'material-ui/svg-icons/action/shopping-basket';
import RemoveIcon from 'material-ui/svg-icons/action/remove-shopping-cart';
const mobile = ScreenSize.mobile;

const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  margin-bottom: 25px;
  padding: 15px;
  border: 1px solid #383838;
  @media (max-width: ${mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;
const IMG = styled.img`
  width: 250px;
  height: 200px;
  object-fit: cover;
`;
const BodyText = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #383838;
  font-size: 1em;
  margin: 0;
  @media (max-width: ${mobile}) {
    /* text-align: center; */
  }
`;

const TitleText = styled.span`
  font-size: 1.3em;
  font-weight: 600;
  @media (max-width: ${mobile}) {
    margin-bottom: 10px;
    display: inline-block;
  }
`;
const PriceText = styled.span`
  font-size: 1.5em;
  font-weight: 600;
`;
const MiddlePane = styled.div`
  padding-left: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const LastPane = styled.div`
  padding-left: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
  @media (max-width: ${mobile}) {
    /* flex-direction: column; */
    margin: 15px 0;
    text-align: center;
  }
`;
const iconStyles = {
  marginRight: '5px',
  color: '#383838',
  position: 'relative',
  top: '4px',
};
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
      <MiddlePane>
        <BodyText>
          <TitleText>Product Name: {name}</TitleText>
        </BodyText>

        <BodyText>
          <ColorLens style={iconStyles} />
          Color: {color}
        </BodyText>

        <BodyText>
          <Size style={iconStyles} />
          Size: {size}
        </BodyText>
        <BodyText>
          <NumberIcon style={iconStyles} />
          Quantity: {quantity}
        </BodyText>
      </MiddlePane>
      <LastPane>
        <BodyText>
          <PriceText>Price: ${price}</PriceText>
        </BodyText>
        <FlatButton
          icon={<RemoveIcon />}
          label="Remove"
          onClick={() => handleRemove(cartItemID)}
        />
      </LastPane>
    </Wrapper>
  );
};
