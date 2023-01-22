import { FetchOptions } from "../types/additional-options";

export type MultipleFetchParams<U> = {
  data?: U;
  params?: RequestInit;
  common?: FetchOptions;
};

export type SingleFetchParams = {
  id: string;
  data?: Record<string, any>;
  params?: RequestInit;
};
