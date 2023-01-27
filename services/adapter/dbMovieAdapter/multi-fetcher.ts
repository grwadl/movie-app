import { Environment } from "@/configs";
import type { MultiApiFetcher } from "@/services/api/movie/base";
import { IMultiplyEntityFetcher } from "@/services/api/movie/contracts/entity-fetcher";
import { MultipleFetchParams } from "@/services/api/movie/contracts/entity-fetcher-params";
import { IMovie, MovieDbArrayApiResponse } from "@/services/api/movie/types";
import { MovieDbMultiplyResponseDTO } from "../types";

export class MovieDbMultiApiFetcherAdapter
  implements
    IMultiplyEntityFetcher<
      MovieDbMultiplyResponseDTO<IMovie>,
      Record<string, string>
    >
{
  constructor(
    private movieApiFetcher: MultiApiFetcher<
      MovieDbArrayApiResponse<IMovie>,
      Record<string, string>
    >
  ) {}

  async get(
    opt?: MultipleFetchParams<Record<string, string>>
  ): Promise<MovieDbMultiplyResponseDTO<IMovie>> {
    const { results, ...meta } = await this.movieApiFetcher.get(opt);

    const data = results.map((it) => ({
      ...it,
      poster_path: Environment.IMG_PATH + it.poster_path,
    }));

    return { data, meta };
  }
}
