import { Environment } from "@/configs";
import type { MultiApiFetcher } from "@/services/api/movie/base";
import { IMultiplyEntityFetcher } from "@/services/api/movie/contracts/entity-fetcher";
import { MultipleFetchParams } from "@/services/api/movie/contracts/entity-fetcher-params";
import { IMovie, MovieDbArrayApiResponse } from "@/services/api/movie/types";
import { MovieDbMultiplyResponseDTO } from "../types";

export class MovieDbMultiApiFetcherAdapter
  implements
    IMultiplyEntityFetcher<MovieDbMultiplyResponseDTO<IMovie>, Partial<IMovie>>
{
  constructor(
    private movieApiFetcher: MultiApiFetcher<
      MovieDbArrayApiResponse<IMovie>,
      Partial<IMovie>
    >
  ) {}

  async get(
    opt?: MultipleFetchParams<Partial<IMovie>>
  ): Promise<MovieDbMultiplyResponseDTO<IMovie>> {
    const { results, ...meta } = await this.movieApiFetcher.get(opt);

    const data = results.map((it) => ({
      ...it,
      poster_path: Environment.IMG_PATH + it.poster_path,
    }));

    return { data, meta };
  }
}
