import { queryTransformer } from "@/lib/query-transformer";
import { MovieDbApiResponseAdapter } from "@/services/adapter/dbMovieAdapter";
import {
  MovieDbMultiplyResponseDTO,
  MovieDbSingleResponseDTO,
} from "@/services/adapter/types";
import { ApiFetcher } from "../base";
import { IFetcher } from "../contracts/entity-fetcher";
import { IMovie, MovieDbArrayApiResponse } from "../types";

type IMovieFetcher = IFetcher<
  MovieDbSingleResponseDTO<IMovie>,
  MovieDbMultiplyResponseDTO<IMovie>,
  Partial<IMovie>
>;

class PopularMovieApiService implements IMovieFetcher {
  constructor(private movieApiService: IMovieFetcher) {}

  get(data?: Partial<IMovie>): Promise<MovieDbMultiplyResponseDTO<IMovie>> {
    return this.movieApiService.get(data ?? {});
  }

  getOne(id: string): Promise<MovieDbSingleResponseDTO<IMovie>> {
    return this.movieApiService.getOne(id);
  }
}

const movieService = new ApiFetcher<MovieDbArrayApiResponse<IMovie>, IMovie>(
  queryTransformer,
  process.env.API_URL + "/movie/popular"
);

const transformedResponseFetcher = new MovieDbApiResponseAdapter<
  IMovie,
  Partial<IMovie>
>(movieService);

export const popularMovieService = new PopularMovieApiService(
  transformedResponseFetcher
);
