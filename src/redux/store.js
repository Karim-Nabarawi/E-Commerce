import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

//Saga
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-saga";

import rootReducer from "./root-reducer";

const sagaMidleWare = createSagaMiddleware();

const middlewares = [sagaMidleWare];

if (process.env.NODE_ENV === "development") middlewares.push(logger);

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnchancer(applyMiddleware(...middlewares)));

sagaMidleWare.run(rootSaga);

export const persistor = persistStore(store);

export default store;
