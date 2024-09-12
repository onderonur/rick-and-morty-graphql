export function createUrl(pathname: string, urlSearchParams?: URLSearchParams) {
  if (!urlSearchParams?.toString()) {
    return pathname;
  }

  const nonEmptyUrlSearchParams = new URLSearchParams();

  urlSearchParams.forEach((value, key) => {
    if (value) {
      nonEmptyUrlSearchParams.append(key, value);
    }
  });

  const paramsString = nonEmptyUrlSearchParams.toString();
  const queryString = paramsString ? `?${paramsString}` : '';
  return `${pathname}${queryString}`;
}
