import React from 'react';
import { IconButton, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form } from 'formik';
import BaseTextField from '@/common/BaseTextField';
import { QueryParams, routes } from '@/routing/routes';
import { useRouteParams } from '@/routing/useRouteParams';

interface CharacterSearchFormValues {
  searchValue: string;
}

const useStyles = makeStyles(() => ({
  form: {
    width: '100%',
    maxWidth: 640,
    margin: 'auto',
  },
}));

type CharacterSearchQueryParams = QueryParams<typeof routes['characters']>;

function CharacterSearch() {
  const classes = useStyles();
  const { routeParams, setQueryParams } = useRouteParams<
    {},
    CharacterSearchQueryParams
  >();
  const name = routeParams.get('name');

  function handleSearch({ searchValue }: CharacterSearchFormValues) {
    setQueryParams({ name: searchValue });
  }

  return (
    <Formik<CharacterSearchFormValues>
      initialValues={{
        searchValue: typeof name === 'string' ? name : '',
      }}
      enableReinitialize
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
