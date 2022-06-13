import axios, { AxiosResponse } from 'axios';
import { ProductListTypes } from '../@types';

export const fetchProducts = (
  endpoint: string
): Promise<AxiosResponse<ProductListTypes>> => {
  return axios.get(endpoint);
};
