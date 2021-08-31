import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers";

const initialState = [];

const middleWare = [thunk];

const store = createStore(
	rootReducers,
	initialState,
	compose(applyMiddleware(...middleWare),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	),
);

export default store;
