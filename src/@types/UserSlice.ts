export type UserTypes = {
  userName: string | null;
  userEmail: string | null;
};

export type UserInitialStateTypes = {
  user: UserTypes | null;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: any;
};
