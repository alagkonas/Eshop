import { useParams } from 'react-router-dom';
import ProductList from '../../components/ProductList';
import Breadcrumb from '../../components/Breadcrumb';

const CategoryProducts: React.FC = () => {
  const { categoryName } = useParams<string>();

  let categoryProducts: string = '';

  if (categoryName === 'all_products') {
    categoryProducts = 'All Products';
  }
  if (categoryName === 'mens_clothing') {
    categoryProducts = `Men's clothing`;
  }
  if (categoryName === 'womens_clothing') {
    categoryProducts = `Women's clothing`;
  }
  if (categoryName === 'jewelry') {
    categoryProducts = 'Jewelry';
  }
  if (categoryName === 'electronics') {
    categoryProducts = 'Electronics';
  }

  return (
    <div>
      <h2 style={{ color: 'rgba(0, 0, 0, 0.6)' }}>{categoryProducts}</h2>
      <Breadcrumb />
      <ProductList />
    </div>
  );
};

export default CategoryProducts;
