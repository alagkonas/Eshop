import CategoryListItem from './CategoryListItem';
import Grid from '@mui/material/Grid';
import './CategoryList.css';

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
        <Grid id='grid' item xs={2} sm={4} md={4}>
          <CategoryListItem />
        </Grid>
        <Grid id='grid' item xs={2} sm={4} md={4}>
          <CategoryListItem />
        </Grid>
        <Grid id='grid' item xs={2} sm={4} md={4}>
          <CategoryListItem />
        </Grid>
        <Grid id='grid' item xs={2} sm={4} md={4}>
          <CategoryListItem />
        </Grid>
      </Grid>
    </div>
  );
};

export default CategoryList;
