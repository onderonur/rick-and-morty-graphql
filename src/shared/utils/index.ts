import { Maybe } from "@/generated/graphql";

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

const SUFFIX = "RickQL";
export const getDocumentTitle = (title?: Maybe<string>) =>
  title ? `${title} - ${SUFFIX}` : SUFFIX;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isNonEmptyString = (id: any): id is string =>
  typeof id === "string" && !!id;
