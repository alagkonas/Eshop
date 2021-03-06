import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { register, googleAuth, reset } from '../../features/user/userSlice';
import Spinner from '../../components/Spinner';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import { toast } from 'react-toastify';
import {
  cardStyles,
  boxStyles,
  cardContentStyles,
  textFieldStyles,
  typographyStyles,
  typographyStyles3,
  buttonStyles,
} from './styles';
import { FormDataTypes, UserInitialStateTypes } from '../../@types';
import './SignUp.css';

const initialState: FormDataTypes = {
  name: '',
  email: '',
  password: '',
};

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<FormDataTypes>(initialState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isSuccess, isError, isLoading, message } =
    useAppSelector<UserInitialStateTypes>((state) => state.user);

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
      navigate('/');
    }
    if (isError) {
      toast.error(message);
      setFormData(initialState);
    }
    // eslint-disable-next-line
  }, [isSuccess, isError]);

  const { name, email, password } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (): void => {
    dispatch(register(formData));
    toast.success('Register Successful', { delay: 1000 });
  };

  const onGoogleAuth = (): void => {
    dispatch(googleAuth());
    toast.success('Register Successful', { delay: 3500 });
  };

  if (isLoading) return <Spinner />;

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
            onClick={onGoogleAuth}
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
