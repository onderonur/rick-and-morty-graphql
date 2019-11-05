import React from "react";
import { TextField } from "@material-ui/core";
import { useField } from "formik";

function BaseTextField(props) {
  const [field, meta] = useField(props);
  const { error, touched } = meta;
  const hasError = error && touched;

  return (
    <TextField {...props} {...field} error={hasError} helperText={error} />
  );
}

export default BaseTextField;
