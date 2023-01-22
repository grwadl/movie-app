import { ApiFetcher } from "@/services/api/movie/base";
import {
  IMultiplyEntityFetcher,
  ISingleEntityFetcher,
} from "@/services/api/movie/contracts/entity-fetcher";
import {
  MovieDbArrayApiResponse,
  MovieDbSingleApiResponse,
} from "@/services/api/movie/types";
import { MovieDbMultiplyResponseDTO, MovieDbSingleResponseDTO } from "../types";

export class MovieDbApiResponseAdapter<
  T extends Record<string, any>,
  U extends Record<string, any> = {}
> implements
    IMultiplyEntityFetcher<MovieDbMultiplyResponseDTO<T>, U>,
    ISingleEntityFetcher<MovieDbSingleResponseDTO<T>>
{
  constructor(
    private apiService: ApiFetcher<
      MovieDbArrayApiResponse<T>,
      U,
      MovieDbSingleApiResponse<T>
    >
  ) {}

  async get(opt?: U): Promise<MovieDbMultiplyResponseDTO<T>> {
    const response = await this.apiService.get(opt);
    const { results: data, ...meta } = response;
    return { data, meta };
  }

  async getOne(id: string): Promise<MovieDbSingleResponseDTO<T>> {
    const response = await this.apiService.getOne(id);
    return { data: response };
  }
}
