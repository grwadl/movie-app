import { Environment } from "@/configs";
import { queryTransformer } from "@/lib/query-transformer";
import { MovieDbSingleApiFetcherAdapter } from "@/services/adapter/dbMovieAdapter";
import { SingleApiFetcher } from "../base";
import { IMovie, MovieDbSingleApiResponse } from "../types";

const singleFetcher = new SingleApiFetcher<MovieDbSingleApiResponse<IMovie>>(
  queryTransformer,
  Environment.API_URL + "/movie"
);

export const transformedSingleFetcher = new MovieDbSingleApiFetcherAdapter(
  singleFetcher
);
