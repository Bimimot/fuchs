export type RequestMethod = 'GET' | 'POST';

export interface IRequestParams {
  path: string;
  method: RequestMethod;
  baseUrl?: string;
  query?: Record<string, string>;
  body?: BodyInit;
  headers?: Record<string, string>;
}

export function request(params: IRequestParams): Promise<Response> {
  const {
    method,
    path,
    baseUrl = import.meta.env.VITE_BASE_API_URL ?? '',
    query,
    body,
    headers,
  } = params;

  const url = new URL(path, baseUrl || window.location.origin);
  if (query) {
    Object.keys(query).forEach((key) => url.searchParams.set(key, query[key]));
  }

  const options: RequestInit = {
    method,
  };
  if (body) options.body = body;
  if (headers) options.headers = headers;
  return fetch(url, options);
}
