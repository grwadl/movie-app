import { Meta } from "@/services/api/movie/types/meta";

export type MovieDbSingleResponseDTO<T> = {
  meta?: Meta;
  data: T;
};

export type MovieDbMultiplyResponseDTO<T> = {
  meta?: Meta;
  data: T[];
};
