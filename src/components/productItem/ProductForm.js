import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ProductForm = ({ colors, sizes, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Color:</label>
        <div>
          <Field name="color" component="select">
            <option />
            {colors.map(color => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </Field>
        </div>
      </div>

      <div>
        <label>Size:</label>
        <div>
          <Field name="size" component="select">
            <option />
            {sizes.map(size => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </Field>
        </div>
      </div>

      <div>
        <label>Quantity:</label>
        <div>
          <Field name="quantity" component="select">
            <option />
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Field>
        </div>
      </div>

      <br />
      <button type="submit">Add To Cart</button>
    </form>
  );
};

export default reduxForm({
  form: 'productForm',
})(ProductForm);
