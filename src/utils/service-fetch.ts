import { AppError } from "@common/AppError";
import { ErrorMessages } from "@constants/error-message";
import { ApiConfig, HttpMethods, StatusCode } from "@custom-types/common";

export const serviceFetch = async <TResponse, TRequest = undefined>({
  method = HttpMethods.GET,
  endpoint,
  headers = {},
  body,
}: ApiConfig<TRequest>): Promise<TResponse> => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const url = new URL(`${baseUrl}${endpoint}`);

  const requestConfig: RequestInit = {
    method,
    headers: { "Content-Type": "application/json", ...headers },
  };

  if (method !== HttpMethods.GET && method !== "DELETE" && body) {
    requestConfig.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url.toString(), requestConfig);

    if (!response.ok) {
      const data = await response.json();
      throw new AppError(data.message || ErrorMessages.INTERNAL_ERROR, response.status, data);
    }

    return await response.json();
  } catch (error: unknown) {
    if (error instanceof AppError) {
      throw error;
    }
    throw new AppError(ErrorMessages.INTERNAL_ERROR, StatusCode.UNKNOWN, (error as Error).message);
  }
};
