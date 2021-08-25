import { Nil } from './CommonTypes';

export const APP_TITLE = 'RickQL';

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
export const isNonEmptyString = (value: any): value is string =>
  typeof value === 'string' && !!value;

export const UNKNOWN = 'Unknown';

export const isNil = (val: unknown): val is Nil => {
  return val === null || val === undefined;
};

export const IS_SERVER = typeof window === 'undefined';
