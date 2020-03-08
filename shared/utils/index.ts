// https://rangle.io/blog/how-to-use-typescript-type-guards/
export function isOfType<T>(obj: any, keys: (keyof T)[]): obj is T {
  for (const key of keys) {
    if (!(key in obj)) {
      return false;
    }
  }
  return true;
}

const SUFFIX = "RickQL";
export const getDocumentTitle = (title?: string) =>
  title ? `${title} - ${SUFFIX}` : SUFFIX;
