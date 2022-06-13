import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ReactQueryDevtools } from 'react-query/devtools';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './pages/Home';
import CategoryProducts from './pages/CategoryProducts';
import Product from './pages/Product';
import SignUp from './pages/SignUp';
import SignIn from './pages/Signin';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sign_up' element={<SignUp />} />
            <Route path='/sign_in' element={<SignIn />} />
            <Route
              path='products/:categoryName'
              element={<CategoryProducts />}
            />
            <Route path='/products/:categoryName/1' element={<Product />} />
          </Routes>
        </div>
        ;
      </Router>
      <ToastContainer theme='dark' pauseOnHover={true} />
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </>
  );
}

export default App;
