import { Link, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import ProductListItem from './ProductListItem';
import {
  MENS_CATEGORY,
  WOMENS_CATEGORY,
  ELECTRONICS_CATEGORY,
  JEWELRY_CATEGORY,
} from '../../config';
import { ProductListTypes, ProductTypes } from '../../@types';
import Grid from '@mui/material/Grid';
import './ProductList.css';

let endpoint: string;

const ProductList: React.FC = () => {
  const { categoryName } = useParams<string>();

  if (categoryName === 'mens_clothing') {
    endpoint = MENS_CATEGORY;
  }
  if (categoryName === 'womens_clothing') {
    endpoint = WOMENS_CATEGORY;
  }
  if (categoryName === 'jewelry') {
    endpoint = JEWELRY_CATEGORY;
  }
  if (categoryName === 'electronics') {
    endpoint = ELECTRONICS_CATEGORY;
  }

  // @ts-ignore
  const { data, isLoading }: ProductListTypes = useQuery(
    // @ts-ignore
    categoryName,
    async () => await axios.get(endpoint)
  );

  if (isLoading) return <p>Loading...</p>;

  return (
    <div id='items-grid'>
      <Grid
        container={true}
        spacing={{ xs: 2, md: 4 }}
        columns={{ md: 12, lg: 16 }}
        direction='row'
        justifyContent='space-evenly'
        alignItems='center'
      >
        {data?.data.map((product: ProductTypes) => {
          return (
            <Grid id='item-grid' item xs={2} sm={4} md={4} key={product.id}>
              <Link
                id='product-div'
                to={`/products/${categoryName}/${product.id}`}
              >
                <ProductListItem image={product.image} title={product.title} />
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ProductList;
