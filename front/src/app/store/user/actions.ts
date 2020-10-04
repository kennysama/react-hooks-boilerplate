import { IUser } from "../../types/user";

export enum ActionType {
  SIGN_IN = "[USER]SIGN_IN",
}
//
//Action Types
export type SignIn = {
  type: typeof ActionType.SIGN_IN;
  payload: IUser;
};

//Executors.

export const signIn = (user: IUser): SignIn => ({
  type: ActionType.SIGN_IN,
  payload: user,
});

export type Actions = SignIn;
