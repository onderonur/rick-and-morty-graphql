declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      NEXT_PUBLIC_BASE_URL: string;
      NEXT_PUBLIC_API_URL: string;
    }
  }
}

export default {};
