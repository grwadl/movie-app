import * as qs from "qs";
import { IQueryTransformer } from "./types";

class QueryTransformer implements IQueryTransformer {
  stringify(data: Record<string, unknown>): string {
    return qs.stringify(data);
  }

  parse<T>(query: string | null): T | null {
    if (!query) return null;

    return qs.parse(query) as T;
  }
}

export const queryTransformer = new QueryTransformer();
