import React from "react";
import { TextField } from "@material-ui/core";
import { Field } from "formik";

function MuiTextField({
  field, // {name, value, onChange, onBlur}
  form, // {touched, errors, values, setXXXX, handleXXXX, dirty, isValid, submitCount,status, etc.}
  ...rest
}) {
  const { name } = field;
  const { touched, errors } = form;

  const error = errors[name];
  const isTouched = touched[name];

  const hasError = error && isTouched;

  return (
    <TextField
      {...field}
      {...rest}
      error={hasError}
      helperText={hasError ? error : ""}
    />
  );
}

function BaseTextField(props) {
  return <Field {...props} component={MuiTextField} />;
}

export default BaseTextField;
