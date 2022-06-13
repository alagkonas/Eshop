import { useQuery } from 'react-query';
import { fetchProducts } from './callbacks';

export const useFetchProducts = (category: string, endpoint: string) => {
  // @ts-ignore
  return useQuery(category, fetchProducts(endpoint));
};
