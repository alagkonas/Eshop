import { useParams } from 'react-router-dom';

const CategoryProducts: React.FC = () => {
  const { categoryName } = useParams<string>();

  return <div>{categoryName}</div>;
};

export default CategoryProducts;
