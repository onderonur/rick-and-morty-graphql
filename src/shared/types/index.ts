declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      BASE_URL: string;
      API_URL: string;
    }
  }
}

export default {};
