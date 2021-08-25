import React from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';
import { useField, FieldHookConfig } from 'formik';

type BaseTextFieldProps = TextFieldProps & FieldHookConfig<string>;

function BaseTextField(props: BaseTextFieldProps) {
  const [field, meta] = useField(props);
  const { error, touched } = meta;
  const hasError = Boolean(error && touched);

  return (
    <TextField
      {...props}
      {...field}
      error={hasError}
      helperText={hasError && error}
    />
  );
}

export default BaseTextField;
