import { Meta } from "./meta";

export type MovieDbArrayApiResponse<T> = {
  results: T[];
} & Meta;

export type MovieDbSingleApiResponse<T> = T;
