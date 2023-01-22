import { IQueryTransformer } from "@/lib/query-transformer/types";
import { getRequest } from "@/services/fetch";
import type {
  IMultiplyEntityFetcher,
  ISingleEntityFetcher,
} from "../contracts/entity-fetcher";

export class ApiFetcher<T extends Record<string, any>, U, M = U>
  implements IMultiplyEntityFetcher<T, U>, ISingleEntityFetcher<M>
{
  constructor(
    private queryTransformer: IQueryTransformer,
    private baseUrl: string
  ) {}

  get(data?: Partial<U>): Promise<T> {
    const query = this.queryTransformer.stringify({
      ...(data ?? {}),
      api_key: process.env.API_KEY,
    });
    const searchParams = query ? "?" + query : "";
    const url = new URL(this.baseUrl);
    url.search = searchParams;

    return getRequest<T>(url);
  }

  getOne(id: string): Promise<M> {
    const url = new URL(this.baseUrl + "/" + id);

    return getRequest<M>(url);
  }
}
