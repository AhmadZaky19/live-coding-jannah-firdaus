import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";
import rootReducer from "./reducer/user";

export default createStore(rootReducer, applyMiddleware(promiseMiddleware, logger));
