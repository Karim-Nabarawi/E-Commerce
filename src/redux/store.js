import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

const middlewares = [logger, thunk];

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnchancer(applyMiddleware(...middlewares)));

export default store;
