import { Environment } from "@/configs";
import { queryTransformer } from "@/lib/query-transformer";
import { MovieDbMultiApiFetcherAdapter } from "@/services/adapter/dbMovieAdapter";
import { MultiApiFetcher } from "../base";
import { IMovie, MovieDbArrayApiResponse } from "../types";

const multiFetcher = new MultiApiFetcher<
  MovieDbArrayApiResponse<IMovie>,
  IMovie
>(queryTransformer, Environment.API_URL + "/trending/movie");

export const transformedTrendingMovieFetcher =
  new MovieDbMultiApiFetcherAdapter(multiFetcher);
