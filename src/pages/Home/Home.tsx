import './Home.css';
import CategoryList from '../../components/CategoryList';
import SearchBar from '../../components/SearchBar';

const Home: React.FC = () => {
  return (
    <div id='home-div'>
      <div id='search-bar'>
        <SearchBar />
      </div>
      <CategoryList />
    </div>
  );
};

export default Home;
