import { AxiosAdapter } from '../infra/adapters/axios-adapter';
import { HttpClient } from '../infra/interfaces/http-client';

export const createHttpClient = (): HttpClient => {
  const result = new AxiosAdapter();

  return result;
};
