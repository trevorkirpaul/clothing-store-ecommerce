import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import styled from 'styled-components';
import AddCartIcon from 'material-ui/svg-icons/action/add-shopping-cart';
import ColorIcon from 'material-ui/svg-icons/image/color-lens';
import SizeIcon from 'material-ui/svg-icons/image/straighten';
import QuantityIcon from 'material-ui/svg-icons/action/shopping-basket';
import { ScreenSize } from '../../config';
const mobile = ScreenSize.mobile;

const Wrapper = styled.div`
  padding: 25px;
  margin: 10px 0;
  @media (max-width: ${mobile}) {
    text-align: center;
  }
`;
const WarningWrapper = styled.div`
  padding: 5px;
  margin: 5px;
`;
const WarningText = styled.p`
  font-family: 'Roboto', sans-serif;
  color: red;
`;
const StyledLink = styled(Link)`
  text-decoration: none;

  border-bottom: 1px solid #383838;
  color: #383838;
`;

// create mat-ui select field for redux-form
export const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  onChange,
  ...custom
}) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}
  />
);
// style fro SVG icons
const iconOpt = {
  color: '#383838',
  position: 'relative',
  top: '5px',
  marginRight: '.5em',
};
// userID is used to toggle functionality for button to add item to cart
const ProductForm = ({ colors, sizes, handleSubmit, userID }) => {
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <ColorIcon style={iconOpt} /> Color:
          </label>
          <div>
            <Field name="color" component={renderSelectField}>
              <MenuItem />
              {colors.map(color => (
                <MenuItem key={color} value={color} primaryText={color} />
              ))}
            </Field>
          </div>
        </div>

        <div>
          <label>
            <SizeIcon style={iconOpt} /> Size:
          </label>
          <div>
            <Field name="size" component={renderSelectField}>
              <MenuItem />
              {sizes.map(size => (
                <MenuItem key={size} value={size} primaryText={size} />
              ))}
            </Field>
          </div>
        </div>

        <div>
          <label>
            <QuantityIcon style={iconOpt} /> Quantity:
          </label>
          <div>
            <Field name="quantity" component={renderSelectField}>
              <MenuItem />
              <MenuItem value="1" primaryText="1" />
              <MenuItem value="2" primaryText="2" />
              <MenuItem value="3" primaryText="3" />
            </Field>
          </div>
        </div>

        <br />

        <RaisedButton
          icon={<AddCartIcon />}
          primary={true}
          type="submit"
          label="Add To Cart"
          disabled={!userID}
        />
        {!userID && (
          <WarningWrapper>
            <WarningText>
              Please <StyledLink to="/signin"> Sign In </StyledLink> or
              <StyledLink to="/signup"> Sign Up </StyledLink> to add this to
              your cart
            </WarningText>
          </WarningWrapper>
        )}
      </form>
    </Wrapper>
  );
};

export default reduxForm({
  form: 'productForm',
})(ProductForm);
