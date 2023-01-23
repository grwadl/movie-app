import { Environment } from "@/configs";
import { queryTransformer } from "@/lib/query-transformer";
import {
  MovieDbMultiApiFetcherAdapter,
  MovieDbSingleApiFetcherAdapter,
} from "@/services/adapter/dbMovieAdapter";
import { MultiApiFetcher, SingleApiFetcher } from "../base";
import {
  IMovie,
  MovieDbArrayApiResponse,
  MovieDbSingleApiResponse,
} from "../types";

const movieMultiFetcherService = new MultiApiFetcher<
  MovieDbArrayApiResponse<IMovie>,
  IMovie
>(queryTransformer, Environment.API_URL + "/movie/popular");

const movieSingleFetcherService = new SingleApiFetcher<
  MovieDbSingleApiResponse<IMovie>
>(queryTransformer, Environment.API_URL + "/movie/popular");

export const transformedMultiResponseFetcher =
  new MovieDbMultiApiFetcherAdapter(movieMultiFetcherService);

export const transformedSingleResponseFetcher =
  new MovieDbSingleApiFetcherAdapter(movieSingleFetcherService);
