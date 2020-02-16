import nodeFetch from "node-fetch";

const httpMethods = ['get', 'path', 'put', 'post', 'delete'];
type HttpMethods = 'get' | 'path' | 'put' | 'post' | 'delete';

/**
 * Describes a fetch function signature
 */
interface HttpFetch {
  (url: string, options: Partial<RequestInfo>): any | Error;
}

/**
 * Basic fetch method
 * @param url
 * @param options
 */
const fetch: HttpFetch = async (url: string, options?: {}) => {
  const response = await nodeFetch(url, {
    headers: {
      'Accept': 'application/json',
    },
    ...options
  });

  if (!response.ok) {
    const error = await response.text();
    return new Error(error);
  }

  const json = await response.json();
  return json;
};

export const createHttpEndpoint = <T>() => {
  type HttpCall = (url: string, options?: {}) => Promise<T>;

  const methods: Record<HttpMethods, HttpCall> = httpMethods.reduce((memo, method) => {
    methods[method.toLowerCase()] = async (url: string, options?: {}) => {
      const model = await fetch(url, {
        method,
        ...options
      });

      return model as T;
    };

    return memo;
  }, {} as Record<HttpMethods, HttpCall>);

  return { ...methods };
};

