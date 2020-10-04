import { createStore, applyMiddleware, compose, StoreCreator } from "redux";
import { combineReducers } from "redux";

import thunk from "redux-thunk";

import * as fromUser from "./user";

const reducers = {
  user: fromUser.reducers,
};

const rootReducer = combineReducers(reducers);

export type AppState = ReturnType<typeof rootReducer>;

const enhancers = compose(
  applyMiddleware(thunk),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    : (f: StoreCreator) => f
);

export function configureStore(initialState: any) {
  return createStore(rootReducer, initialState, enhancers);
}
