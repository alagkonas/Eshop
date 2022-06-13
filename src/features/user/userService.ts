import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from 'firebase/auth';
import { app } from '../../firebase.config';
import { FormDataTypes, SignInFormDataTypes, UserTypes } from '../../@types';

const auth: any = getAuth(app);

const registerUser = async (userData: FormDataTypes) => {
  const { name, email, password } = userData;
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

  const userInfo: UserTypes = {
    userName,
    userEmail,
  };

  userInfo && localStorage.setItem('authUser', JSON.stringify(userInfo));

  return userInfo;
};

const loginUser = async (formData: SignInFormDataTypes) => {
  const { email, password } = formData;

  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  const user = userCredential.user;

  const { displayName: userName, email: userEmail } = user;

  const userInfo: UserTypes = {
    userName,
    userEmail,
  };

  userInfo && localStorage.setItem('authUser', JSON.stringify(userInfo));

  return userInfo;
};

const googleAuth = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;
  const { displayName: userName, email: userEmail } = user;

  const userInfo: UserTypes = {
    userName,
    userEmail,
  };

  userInfo && localStorage.setItem('authUser', JSON.stringify(userInfo));

  return userInfo;
};

const logoutUser = () => {
  auth.signOut();
  localStorage.removeItem('authUser');
};

const userService = {
  registerUser,
  loginUser,
  googleAuth,
  logoutUser,
};

export default userService;
