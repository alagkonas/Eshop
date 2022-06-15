import { useParams } from 'react-router-dom';
import ProductList from '../../components/ProductList';
import Breadcrumb from '../../components/Breadcrumb';

const CategoryProducts: React.FC = () => {
  const { categoryName } = useParams<string>();

  return (
    <div>
      {categoryName}
      <Breadcrumb />
      <ProductList />
    </div>
  );
};

export default CategoryProducts;
