// https://rangle.io/blog/how-to-use-typescript-type-guards/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isOfType<T>(obj: any, keys: (keyof T)[]): obj is T {
  for (const key of keys) {
    if (!(key in obj)) {
      return false;
    }
  }
  return true;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isNonEmptyString = (id: any): id is string =>
  typeof id === "string" && !!id;

export const UNKNOWN = "Unknown";
