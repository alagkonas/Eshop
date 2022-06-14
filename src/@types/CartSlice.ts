import { ProductTypes } from './Products';

export type CartInitialStateTypes = {
  products: ProductTypes[] | ProductTypes;
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
  message: any;
};
