import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./reducer";
import thunk from "redux-thunk";
import logger from 'redux-logger';
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleWare = [thunk,logger];
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleWare))
);

export type RootStore = ReturnType<typeof rootReducer>;
export default store;
