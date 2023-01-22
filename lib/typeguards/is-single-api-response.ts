import {
  MovieDbArrayApiResponse,
  MovieDbSingleApiResponse,
} from "@/services/api/movie/types";

export const isSingleApiResponse = <T extends Record<string, unknown>>(
  data: MovieDbArrayApiResponse<T> | MovieDbSingleApiResponse<T>
): data is MovieDbSingleApiResponse<T> => !("results" in data);
