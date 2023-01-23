import {
  MultipleFetchParams,
  SingleFetchParams,
} from "./entity-fetcher-params";

export interface IMultiplyEntityFetcher<T, U> {
  get: (opt?: MultipleFetchParams<U>) => Promise<T>;
}

export interface ISingleEntityFetcher<T> {
  getOne: (opt: SingleFetchParams) => Promise<T>;
}

export type IFetcher<T, U, M = Partial<T>> = ISingleEntityFetcher<T> &
  IMultiplyEntityFetcher<U, M>;
