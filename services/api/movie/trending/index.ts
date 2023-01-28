import { MovieDbMultiplyResponseDTO } from "@/services/adapter/types";
import { IMultiplyEntityFetcher } from "../contracts/entity-fetcher";
import { MultipleFetchParams } from "../contracts/entity-fetcher-params";
import { IMovie } from "../types";
import { transformedTrendingMovieFetcher } from "./common";

class TrendingMoviesService
  implements
    IMultiplyEntityFetcher<
      MovieDbMultiplyResponseDTO<IMovie>,
      Record<string, string>
    >
{
  constructor(
    private fetcher: IMultiplyEntityFetcher<
      MovieDbMultiplyResponseDTO<IMovie>,
      Record<string, string>
    >
  ) {}

  get(
    opt?: MultipleFetchParams<Record<string, string>>
  ): Promise<MovieDbMultiplyResponseDTO<IMovie>> {
    return this.fetcher.get(opt);
  }
}

export const trendingMoviesService = new TrendingMoviesService(
  transformedTrendingMovieFetcher
);
