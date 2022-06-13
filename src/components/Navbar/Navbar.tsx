import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { logout } from '../../features/user/userSlice';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
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
              <Link to='/'>!!Eshop's Name!!</Link>
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
            <IconButton color='inherit'>
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
