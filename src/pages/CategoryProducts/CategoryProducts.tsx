import { useParams } from 'react-router-dom';
import ProductList from '../../components/ProductList';

const CategoryProducts: React.FC = () => {
  const { categoryName } = useParams<string>();

  return (
    <div>
      {categoryName}
      <ProductList />
    </div>
  );
};

export default CategoryProducts;
