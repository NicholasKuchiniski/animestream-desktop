export interface HttpClientRequest {
  path: string;
  method: "get" | "post" | "put" | "patch" | "delete";
  data?: unknown;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}
