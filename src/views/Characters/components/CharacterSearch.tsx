import React from "react";
import { IconButton, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form } from "formik";
import BaseTextField from "@/shared/components/BaseTextField";
import { useRouter } from "next/router";

interface CharacterSearchFormValues {
  searchValue: string;
}

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    maxWidth: 640,
    margin: "auto",
  },
}));

function CharacterSearch() {
  const classes = useStyles();
  const router = useRouter();
  const { name } = router.query;

  function handleSearch({ searchValue }: CharacterSearchFormValues) {
    router.push({
      pathname: router.pathname,
      query: searchValue ? { name: searchValue } : undefined,
    });
  }

  return (
    <Formik<CharacterSearchFormValues>
      initialValues={{
        searchValue: typeof name === "string" ? name : "",
      }}
      onSubmit={handleSearch}
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
            ),
          }}
        />
      </Form>
    </Formik>
  );
}

export default CharacterSearch;
