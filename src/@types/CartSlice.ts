import { ProductTypes } from './Products';

export type CartInitialStateTypes = {
  products: ProductTypes[];
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
  message: string;
};
