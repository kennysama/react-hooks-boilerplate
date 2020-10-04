import { getLoggedInUser } from "../../services/auth";
import { IUser } from "../../types/user";
import { Actions, ActionType } from "./actions";

export interface IUserState {
  user: IUser;
}
//get initial state from cookies
const initialState = { user: getLoggedInUser() };

export const userReducer = (
  state: IUserState = initialState,
  action: Actions
) => {
  switch (action.type) {
    case ActionType.SIGN_IN: {
      return { ...state, user: action.payload };
    }
    default:
      return state;
  }
};
