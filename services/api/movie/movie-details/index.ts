import { MovieDbSingleResponseDTO } from "@/services/adapter/types";
import { ISingleEntityFetcher } from "../contracts/entity-fetcher";
import { SingleFetchParams } from "../contracts/entity-fetcher-params";
import { IMovie } from "../types";
import { transformedSingleFetcher } from "./common";

class MovieDetailsService
  implements ISingleEntityFetcher<MovieDbSingleResponseDTO<IMovie>>
{
  constructor(
    private singleFetcher: ISingleEntityFetcher<
      MovieDbSingleResponseDTO<IMovie>
    >
  ) {}

  getOne(opt: SingleFetchParams): Promise<MovieDbSingleResponseDTO<IMovie>> {
    return this.singleFetcher.getOne(opt);
  }
}

export const movieDetailsService = new MovieDetailsService(
  transformedSingleFetcher
);
