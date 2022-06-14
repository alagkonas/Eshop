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
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';

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
            <Route
              path='/products/:categoryName/:productId'
              element={<Product />}
            />
            <Route path='/:userName/shopping_cart' element={<PrivateRoute />}>
              <Route path='/:userName/shopping_cart' element={<Cart />} />
            </Route>
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
