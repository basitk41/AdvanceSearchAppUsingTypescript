import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore,persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import Favorite from "./reducers/Favorite";
import Search from "./reducers/Search";
import Biography from "./reducers/Biography";
import Pages from './reducers/Pages';
const rootReducer = combineReducers({
  favorite: Favorite,
  search: Search,
  biography:Biography,
  pages:Pages
});
const persistConfig = {
  key:'root',
  storage
};
const persistedReducer = persistReducer(persistConfig,rootReducer);
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||  compose;
export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export const persister = persistStore(store);