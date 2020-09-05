declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      NEXT_PUBLIC_BASE_URL: string;
      NEXT_PUBLIC_API_URL: string;
    }
  }
}

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export default {};
