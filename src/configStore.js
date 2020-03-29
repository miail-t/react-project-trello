import { createStore } from "redux";
import rootReducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootConf = {
  key: "root",
  storage
};
const persistedReducer = persistReducer(rootConf, rootReducer);

/* eslint-disable no-underscore-dangle */
export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */
export const persistor = persistStore(store);
