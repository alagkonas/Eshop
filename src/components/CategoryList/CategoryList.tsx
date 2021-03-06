import { Link } from 'react-router-dom';
import CategoryListItem from './CategoryListItem';
import Grid from '@mui/material/Grid';
import { CategoryTypes } from '../../@types';
import './CategoryList.css';

const categories: CategoryTypes[] = [
  {
    id: 1,
    name: `All products`,
    category: 'all_products',
    img: 'https://media.istockphoto.com/photos/flat-lay-with-womans-clothes-and-accessories-picture-id1339264709?b=1&k=20&m=1339264709&s=170667a&w=0&h=qzBCqQvXpk-eLH8e72ZRaWRPuvWFwcUKZqGr1IsyTlE=',
  },
  {
    id: 2,
    name: `Men's clothing`,
    category: 'mens_clothing',
    img: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
  },
  {
    id: 3,
    name: `Women's clothing`,
    category: 'womens_clothing',
    img: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
  },
  {
    id: 4,
    name: `Jewelry`,
    category: 'jewelry',
    img: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
  },
  {
    id: 5,
    name: `Electronics`,
    category: 'electronics',
    img: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
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
