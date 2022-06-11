import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CategoryProducts from './pages/CategoryProducts';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='products/:categoryName'
              element={<CategoryProducts />}
            />
          </Routes>
        </div>
        ;
      </Router>
    </>
  );
}

export default App;
