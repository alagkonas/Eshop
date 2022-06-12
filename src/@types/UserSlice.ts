export type UserTypes = {
  userName: string;
  email: string;
};

export type UserInitialStateTypes = {
  user: UserTypes | null;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
};
