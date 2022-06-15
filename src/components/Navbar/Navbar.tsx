import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { logout } from '../../features/user/userSlice';
import CartButton from '../CartButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div id='navbar'>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <Typography
              align='left'
              variant='h6'
              component='div'
              sx={{ flexGrow: 1 }}
            >
              <Link to='/'>CyberStore</Link>
            </Typography>
            {user ? (
              <Link to='/'>
                <Button onClick={onLogout} color='inherit'>
                  Logout
                </Button>
              </Link>
            ) : (
              <Link to='/sign_in'>
                <Button color='inherit'>Register / Login</Button>
              </Link>
            )}
            <Link to={`/${user?.userName}/shopping_cart`}>
              <CartButton />
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
