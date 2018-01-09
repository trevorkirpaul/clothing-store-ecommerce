import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const Form = styled.form``;
const Wrapper = styled(Paper)`
  padding: 25px;
  max-width: 900px;
  margin: 10px auto;
  @media (max-width: 450px) {
    margin: 15px;
  }
`;
const Title = styled.h1`
  font-family: 'Roboto', sans=serif;
  font-weight: 300;
  font-size: 3em;
`;
// const ErrorText = styled.p`
//   color: red;
//   font-family: 'Roboto', sans-serif;
//   weight: 700;
// `;

// render text field for redux form using mat-ui
const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

// field validation
const required = value => (value ? undefined : 'Required');

export const AccountActionForm = ({
  handleSubmit,
  auth,
  fields,
  passwordFields,
  title,
}) => {
  const mapTextField = field => (
    <Field
      key={field}
      name={field}
      component={renderTextField}
      label={field}
      validate={required}
    />
  );
  const mapPassField = field => (
    <Field
      key={field}
      name={field}
      component={renderTextField}
      label={field}
      type="password"
      validate={required}
    />
  );
  return (
    <Form onSubmit={handleSubmit}>
      <Wrapper>
        <Title>{title}</Title>
        <div>{fields && fields.map(field => mapTextField(field))}</div>
        <div>
          {passwordFields && passwordFields.map(field => mapPassField(field))}
        </div>
        <div>
          <RaisedButton type="submit" label={title} />
        </div>
      </Wrapper>
    </Form>
  );
};

export default reduxForm({
  form: 'Account Action Form',
})(AccountActionForm);
