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
} from './styles';
import './SignUp.css';

const SignUp: React.FC = () => {
  return (
    <div id='form-div'>
      <Card sx={cardStyles}>
        <Box sx={boxStyles}>
          <Typography sx={typographyStyles} component='div' variant='h5'>
            Sign Up
          </Typography>
          <CardContent sx={cardContentStyles}>
            <TextField
              sx={textFieldStyles}
              id='outlined-textarea'
              label='Username'
              placeholder='johndoe'
              type='text'
            />
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
            Sign Up
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
            Already have an account? <Link to='/sign_in'>Sign-in</Link> instead.
          </Typography>
        </Box>
      </Card>
    </div>
  );
};

export default SignUp;
