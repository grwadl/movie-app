import {
  MovieDbMultiplyResponseDTO,
  MovieDbSingleResponseDTO,
} from "@/services/adapter/types";
import {
  IMultiplyEntityFetcher,
  ISingleEntityFetcher,
} from "../contracts/entity-fetcher";
import {
  MultipleFetchParams,
  SingleFetchParams,
} from "../contracts/entity-fetcher-params";
import { IMovie } from "../types";
import {
  transformedMultiResponseFetcher,
  transformedSingleResponseFetcher,
} from "./common";
import { IMovieFetcher } from "./types";

class PopularMovieApiService implements IMovieFetcher {
  constructor(
    private singleFetcher: ISingleEntityFetcher<
      MovieDbSingleResponseDTO<IMovie>
    >,
    private multiFetcher: IMultiplyEntityFetcher<
      MovieDbMultiplyResponseDTO<IMovie>,
      Record<string, string>
    >
  ) {}

  get(
    opt?: MultipleFetchParams<Record<string, string>>
  ): Promise<MovieDbMultiplyResponseDTO<IMovie>> {
    return this.multiFetcher.get(opt);
  }

  getOne(opt: SingleFetchParams): Promise<MovieDbSingleResponseDTO<IMovie>> {
    return this.singleFetcher.getOne(opt);
  }
}

export const popularMovieService = new PopularMovieApiService(
  transformedSingleResponseFetcher,
  transformedMultiResponseFetcher
);
