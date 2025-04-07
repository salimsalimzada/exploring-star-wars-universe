export type ErrorType = "INTERNAL_ERROR";

export enum StatusCode {
  UNKNOWN = 0,
}

export enum HttpMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export type Primitive = string | number | boolean | null;

export interface ApiConfig<T> {
  method?: keyof typeof HttpMethods;
  endpoint: string;
  body?: T;
  params?: Primitive;
  query?: Record<string, Primitive | Primitive[]>;
  headers?: Record<string, string>;
}
