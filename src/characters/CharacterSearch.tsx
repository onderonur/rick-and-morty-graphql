import React from 'react';
import { Container, IconButton, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Formik, Form } from 'formik';
import BaseTextField from '@/common/BaseTextField';
import { QueryParams, routes } from '@/routing/routes';
import { useRouteParams } from '@/routing/useRouteParams';

interface CharacterSearchFormValues {
  searchValue: string;
}

type CharacterSearchQueryParams = QueryParams<typeof routes['characters']>;

function CharacterSearch() {
  const { routeParams, setQueryParams } = useRouteParams<
    {},
    CharacterSearchQueryParams
  >();
  const name = routeParams.get('name');

  function handleSearch({ searchValue }: CharacterSearchFormValues) {
    setQueryParams({ name: searchValue });
  }

  return (
    <Container maxWidth="sm">
      <Formik<CharacterSearchFormValues>
        initialValues={{
          searchValue: typeof name === 'string' ? name : '',
        }}
        enableReinitialize
        onSubmit={handleSearch}
      >
        <Form autoComplete="off">
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
    </Container>
  );
}

export default CharacterSearch;
