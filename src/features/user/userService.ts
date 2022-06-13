import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { app } from '../../firebase.config';
import { FormDataTypes } from '../../@types';

const registerUser = async (userData: FormDataTypes) => {
  const { name, email, password } = userData;
  const auth: any = getAuth(app);
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  await updateProfile(auth.currentUser, {
    displayName: name,
  });

  const user = userCredential.user;

  const { displayName: userName, email: userEmail } = user;

  const userInfo = {
    userName,
    userEmail,
  };

  userInfo && localStorage.setItem('authUser', JSON.stringify(userInfo));

  return userInfo;
};

const userService = {
  registerUser,
};

export default userService;
