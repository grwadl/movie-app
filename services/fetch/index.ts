import { HttpError } from "@/lib/http-error";

async function fetchReq<T>(URL: URL, params?: RequestInit): Promise<T> {
  const response = await fetch(URL, {
    ...params,
    headers: {
      "Content-Type": "application/json",
      ...(params?.headers ?? {}),
    },
  });
  const json = await response.json();

  if (!response.ok)
    throw new HttpError(
      response.status,
      "Error fetching" + URL.toString(),
      response.statusText
    );

  return json as T;
}

async function getRequest<T>(URL: URL, params?: RequestInit): Promise<T> {
  return fetchReq(URL, {
    ...params,
    method: "GET",
  });
}

async function postRequest<T>(URL: URL, params?: RequestInit): Promise<T> {
  return fetchReq(URL, {
    ...params,
    method: "POST",
  });
}

async function putRequest<T>(URL: URL, params?: RequestInit): Promise<T> {
  return fetchReq(URL, {
    ...params,
    method: "PUT",
  });
}

async function deleteRequest<T>(URL: URL, params?: RequestInit): Promise<T> {
  return fetchReq(URL, {
    ...params,
    method: "DELETE",
  });
}

export { getRequest, deleteRequest, postRequest, putRequest };
