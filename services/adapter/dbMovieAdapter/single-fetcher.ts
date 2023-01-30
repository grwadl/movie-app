import { Environment } from "@/configs";
import type { SingleApiFetcher } from "@/services/api/movie/base";
import { ISingleEntityFetcher } from "@/services/api/movie/contracts/entity-fetcher";
import { SingleFetchParams } from "@/services/api/movie/contracts/entity-fetcher-params";
import { IMovie, MovieDbSingleApiResponse } from "@/services/api/movie/types";
import { MovieDbSingleResponseDTO } from "../types";

export class MovieDbSingleApiFetcherAdapter
  implements ISingleEntityFetcher<MovieDbSingleResponseDTO<IMovie>>
{
  constructor(
    private movieApiFetcher: SingleApiFetcher<MovieDbSingleApiResponse<IMovie>>
  ) {}

  async getOne(
    opt: SingleFetchParams
  ): Promise<MovieDbSingleResponseDTO<IMovie>> {
    let data = await this.movieApiFetcher.getOne(opt);
    data = {
      ...data,
      poster_path: Environment.IMG_PATH + data.poster_path,
      backdrop_path: Environment.IMG_PATH + data.backdrop_path,
    };

    return { data };
  }
}
