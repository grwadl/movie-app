export interface IMultiplyEntityFetcher<T, U> {
  get: (data?: U) => Promise<T>;
}

export interface ISingleEntityFetcher<T> {
  getOne: (id: string) => Promise<T>;
}

export type IFetcher<T, U, M = Partial<T>> = ISingleEntityFetcher<T> &
  IMultiplyEntityFetcher<U, M>;
