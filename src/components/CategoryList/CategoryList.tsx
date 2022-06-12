import { Link } from 'react-router-dom';
import CategoryListItem from './CategoryListItem';
import Grid from '@mui/material/Grid';
import { CategoryTypes } from '../../@types';
import './CategoryList.css';

const categories: CategoryTypes[] = [
  {
    id: 1,
    name: `Men's clothing`,
    category: 'mens_clothing',
    img: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  },
  {
    id: 2,
    name: `Women's clothing`,
    category: 'womens_clothing',
    img: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  },
  {
    id: 3,
    name: `Jewelry`,
    category: 'jewelry',
    img: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  },
  {
    id: 4,
    name: `Electronics`,
    category: 'electronics',
    img: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  },
];

const CategoryList: React.FC = () => {
  return (
    <div id='grid-div'>
      <Grid
        container={true}
        spacing={{ xs: 2, md: 4 }}
        columns={{ md: 12, lg: 16 }}
        direction='row'
        justifyContent='space-evenly'
        alignItems='center'
      >
        {categories.map((category) => (
          <Grid id='grid' item xs={2} sm={4} md={4} key={category.id}>
            <Link to={`products/${category.category}`}>
              <CategoryListItem
                category={category.category}
                img={category.img}
                id={category.id}
                name={category.name}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CategoryList;
