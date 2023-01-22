import { Environment } from "@/configs";
import { IQueryTransformer } from "@/lib/query-transformer/types";
import { getRequest } from "@/services/fetch";
import type { IMultiplyEntityFetcher } from "../contracts/entity-fetcher";
import { MultipleFetchParams } from "../contracts/entity-fetcher-params";

export class MultiApiFetcher<T extends Record<string, any>, U>
  implements IMultiplyEntityFetcher<T, U>
{
  constructor(
    private queryTransformer: IQueryTransformer,
    private baseUrl: string
  ) {}

  get(opt?: MultipleFetchParams<U>): Promise<T> {
    const query = this.queryTransformer.stringify({
      ...(opt?.data ?? {}),
      api_key: Environment.API_KEY,
    });
    const searchParams = query ? "?" + query : "";
    const url = new URL(opt?.common?.overrideUrl ?? this.baseUrl);
    url.search = searchParams;

    return getRequest<T>(url, opt?.params);
  }
}
