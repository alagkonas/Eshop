type RatingTypes = {
  rate: number;
  count: number;
};

export type ProductTypes = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingTypes;
};

export type ProductListTypes = ProductTypes[];
