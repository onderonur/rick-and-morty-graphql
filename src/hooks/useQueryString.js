import queryString from "query-string";
import { useMemo } from "react";

function useQueryString(location) {
  const { search } = location;
  const searchParams = useMemo(() => queryString.parse(search), [search]);

  return searchParams;
}

export default useQueryString;
