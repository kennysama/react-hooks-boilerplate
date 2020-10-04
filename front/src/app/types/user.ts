export const INITIAL_LOGGED_IN: IUser = {
  email: "",
  displayName: "",
  photoURL: "",
  token: "",
};

export interface IUser {
  email: string;
  displayName: string;
  photoURL: string;
  token: string;
}
