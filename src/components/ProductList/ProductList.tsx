import { Link, useParams } from 'react-router-dom';
import ProductListItem from './ProductListItem';
import Grid from '@mui/material/Grid';
import './ProductList.css';

const ProductList: React.FC = () => {
  const { categoryName } = useParams<string>();

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
        <Grid id='item-grid' item xs={2} sm={4} md={4}>
          <Link to={`/products/${categoryName}/1`}>
            <ProductListItem />
          </Link>
        </Grid>
        <Grid id='item-grid' item xs={2} sm={4} md={4}>
          <Link to={`/products/${categoryName}/1`}>
            <ProductListItem />
          </Link>
        </Grid>
        <Grid id='item-grid' item xs={2} sm={4} md={4}>
          <Link to={`/products/${categoryName}/1`}>
            <ProductListItem />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductList;
