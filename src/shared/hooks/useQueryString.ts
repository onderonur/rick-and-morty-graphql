import queryString from "query-string";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";

function useQueryString() {
  const { search } = useLocation();
  const searchParams = useMemo(() => queryString.parse(search), [search]);

  return searchParams;
}

export default useQueryString;
