import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './Navbar.css';

const Navbar: React.FC = () => {
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
            <Link to='/sign_in'>
              <Button color='inherit'>Register / Login</Button>
            </Link>
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
