import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';

const Wrapper = styled(Paper)`
  padding: 25px;
  margin: 10px 0;
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

const ProductForm = ({ colors, sizes, handleSubmit }) => {
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Color:</label>
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
          <label>Size:</label>
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
          <label>Quantity:</label>
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

        <FlatButton primary={true} type="submit" label="Add To Cart" />
      </form>
    </Wrapper>
  );
};

export default reduxForm({
  form: 'productForm',
})(ProductForm);
