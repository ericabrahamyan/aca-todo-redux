import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import thunk from 'redux-thunk';

import reducer from "./reducers";

const logger = createLogger()

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;
