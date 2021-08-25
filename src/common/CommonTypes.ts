declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    export interface ProcessEnv {
      NEXT_PUBLIC_BASE_URL: string;
      API_URL: string;
    }
  }
}

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyFunction = (...args: any) => any;

export type Nil = null | undefined;

export type KeyOf<T> = T extends Nil ? never : keyof T;

export type ID = string;

export type EmptyObject = Record<never, unknown>;
