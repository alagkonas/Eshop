import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import {
  cardStyles,
  boxStyles,
  cardContentStyles,
  textFieldStyles,
  typographyStyles,
  typographyStyles3,
  buttonStyles,
} from '../SignUp/styles';
import './Signin.css';

const Signin: React.FC = () => {
  return (
    <div id='form2-div'>
      <Card sx={cardStyles}>
        <Box sx={boxStyles}>
          <Typography sx={typographyStyles} component='div' variant='h5'>
            Sign In
          </Typography>
          <CardContent sx={cardContentStyles}>
            <TextField
              sx={textFieldStyles}
              id='outlined-textarea'
              label='Email'
              placeholder='johndoe@gmail.com'
              type='email'
            />
            <TextField
              sx={textFieldStyles}
              id='outlined-'
              label='Password'
              placeholder='password'
              type='password'
            />
          </CardContent>
          <Button sx={buttonStyles} variant='contained'>
            Sign In
          </Button>
          <Typography
            sx={{ margin: '0.5rem 0 0.5rem 0' }}
            variant='caption'
            display='block'
            gutterBottom
          >
            OR
          </Typography>
          <Button variant='contained' endIcon={<GoogleIcon />}>
            Continue with Google
          </Button>
          <Typography
            sx={typographyStyles3}
            variant='caption'
            display='block'
            gutterBottom
          >
            Don't have an account? <Link to='/sign_up'>Sign-up</Link> instead.
          </Typography>
        </Box>
      </Card>
    </div>
  );
};

export default Signin;
