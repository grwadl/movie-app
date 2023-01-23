export interface IQueryTransformer {
  parse<T>(query: string | null): T | null;

  stringify(data: Record<string, unknown>): string;
}
