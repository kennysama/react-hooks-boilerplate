import { combineReducers } from "redux";

import { userReducer } from "./reducer";

export * from "./actions";

export const reducers = combineReducers({
  user: userReducer,
});
