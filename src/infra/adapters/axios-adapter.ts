import { HttpClient } from '../interfaces/http-client';
import axios from 'axios';

export class AxiosAdapter implements HttpClient {
  async get<T>(url: string): Promise<T> {
    const axiosResponse = await axios.get<T>(url);
    const result = axiosResponse.data;

    return result;
  }
}
