import { IQueryTransformer } from "@/lib/query-transformer/types";
import { getRequest } from "@/services/fetch";
import type { ISingleEntityFetcher } from "../contracts/entity-fetcher";
import { SingleFetchParams } from "../contracts/entity-fetcher-params";

export class SingleApiFetcher<M> implements ISingleEntityFetcher<M> {
  constructor(
    private queryTransformer: IQueryTransformer,
    private baseUrl: string
  ) {}

  getOne(opt: SingleFetchParams): Promise<M> {
    const url = new URL(this.baseUrl + "/" + opt.id);

    return getRequest<M>(url, opt.params);
  }
}
