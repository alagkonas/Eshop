import './Home.css';
import TextField from '@mui/material/TextField';
import CategoryList from '../../components/CategoryList';

const Home: React.FC = () => {
  return (
    <div id='home-div'>
      <div id='search-bar'>
        <TextField
          id='outlined-search'
          label='Find your product'
          type='search'
          fullWidth={true}
        />
      </div>
      <CategoryList />
    </div>
  );
};

export default Home;
