import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { itemsReducer } from "../items/reducers";

export default function createStore() {
  return reduxCreateStore(
    combineReducers({
      items: itemsReducer,
    }),
    applyMiddleware(thunk)
  );
}
