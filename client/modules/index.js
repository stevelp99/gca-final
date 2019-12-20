import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import actions from "./actions";

const middlewares = [thunk];
const store = createStore(
  combineReducers({
    actions: actions
  }),
  applyMiddleware(...middlewares)
);

export default store;
