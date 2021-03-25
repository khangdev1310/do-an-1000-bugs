import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import createMiddleWareSaga from "redux-saga";
import MovieReducer from "./../../container/HomeTemplate/Home/modules/redux/reducer";
import { rootSaga } from "./../../container/HomeTemplate/Home/modules/redux/rootSaga";

const middleWareSaga = createMiddleWareSaga();

const rootReducer = combineReducers({ MovieReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(middleWareSaga))
);

middleWareSaga.run(rootSaga);
export default store;
