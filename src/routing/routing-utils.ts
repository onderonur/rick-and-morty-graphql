export function createUrl(pathname: string, urlSearchParams?: URLSearchParams) {
  if (!urlSearchParams) {
    return pathname;
  }

  const keysToBeRemoved: string[] = [];

  // Pruning keys with empty values.
  urlSearchParams.forEach((value, key) => {
    if (value === '') {
      keysToBeRemoved.push(key);
    } else if (keysToBeRemoved.includes(key)) {
      // If there are multiple values for the key, other values can be non-empty.
      keysToBeRemoved.splice(keysToBeRemoved.indexOf(key), 1);
    }
  });

  const prunedUrlSearchParams = new URLSearchParams(urlSearchParams);

  keysToBeRemoved.forEach((key) => {
    prunedUrlSearchParams.delete(key);
  });

  const paramsString = prunedUrlSearchParams.toString();
  const queryString = paramsString ? `?${paramsString}` : '';
  return `${pathname}${queryString}`;
}
