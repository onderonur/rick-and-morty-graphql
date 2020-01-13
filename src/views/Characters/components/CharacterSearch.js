import React from "react";
import { IconButton, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form } from "formik";
import useQueryString from "shared/hooks/useQueryString";
import BaseTextField from "shared/components/BaseTextField";

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%",
    maxWidth: 640,
    margin: "auto"
  }
}));

function CharacterSearch() {
  const history = useHistory();
  const { name } = useQueryString();
  const classes = useStyles();

  function handleSearch({ searchValue }) {
    history.push(`/characters${searchValue ? `?name=${searchValue}` : ""}`);
  }

  return (
    <Formik
      initialValues={{
        searchValue: name || ""
      }}
      onSubmit={values => handleSearch(values)}
    >
      <Form className={classes.form} autoComplete="off">
        <BaseTextField
          name="searchValue"
          placeholder="Search"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </Form>
    </Formik>
  );
}

export default CharacterSearch;
