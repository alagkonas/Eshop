import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { register } from '../../features/user/userSlice';
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   updateProfile,
// } from 'firebase/auth';
// import { app } from '../../firebase.config';
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
import { FormDataTypes } from '../../@types';
import './SignUp.css';

const initialState: FormDataTypes = {
  name: '',
  email: '',
  password: '',
};

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<FormDataTypes>(initialState);

  const { name, email, password } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const dispatch = useAppDispatch();

  const onSubmit = () => {
    const userData: FormDataTypes = {
      name,
      email,
      password,
    };

    dispatch(register(userData));

    // try {
    //   const auth: any = getAuth(app);
    //   const userCredential = await createUserWithEmailAndPassword(
    //     auth,
    //     email,
    //     password
    //   );
    //   await updateProfile(auth.currentUser, {
    //     displayName: name,
    //   });
    //   const user = userCredential.user;
    //   // const { displayName, email: userEmail } = user
    //   console.log(user.displayName, user.email);
    // } catch (error) {
    //   console.log(error);
    // }
  };

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
              id='name'
              label='Username'
              placeholder='johndoe'
              type='text'
              value={name}
              onChange={onChange}
            />
            <TextField
              sx={textFieldStyles}
              id='email'
              label='Email'
              placeholder='johndoe@gmail.com'
              type='email'
              value={email}
              onChange={onChange}
            />
            <TextField
              sx={textFieldStyles}
              id='password'
              label='Password'
              placeholder='password'
              type='password'
              value={password}
              onChange={onChange}
            />
          </CardContent>
          <Button onClick={onSubmit} sx={buttonStyles} variant='contained'>
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
          <Button
            onClick={onSubmit}
            variant='contained'
            endIcon={<GoogleIcon />}
          >
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
