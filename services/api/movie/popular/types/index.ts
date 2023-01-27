import {
  MovieDbMultiplyResponseDTO,
  MovieDbSingleResponseDTO,
} from "@/services/adapter/types";
import { IFetcher } from "../../contracts/entity-fetcher";
import { IMovie } from "../../types";

export type IMovieFetcher = IFetcher<
  MovieDbSingleResponseDTO<IMovie>,
  MovieDbMultiplyResponseDTO<IMovie>,
  Record<string, string>
>;
