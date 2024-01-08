declare global {
  interface Window {
    __MICRO_APP_NAME__: string;
    __MICRO_APP_ENVIRONMENT__: boolean;
  }
}

export {};
