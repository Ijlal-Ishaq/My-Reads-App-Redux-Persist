import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/rootreducer';

const persistConfig = {
  key: 'rootreducer',
  storage: storage,
};

const pReducer = persistReducer(persistConfig, rootReducer);
// const middleware = applyMiddleware(thunk, logger);
const store = createStore(pReducer);
const persistor = persistStore(store);

export { persistor, store };