// import { createStore } from 'redux';
// import reducers from '../reducers/reducers';


// const store = createStore(reducers);

// export default store;

/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from '../reducers/reducers';

const persistConfig = {
  key: 'cloud9-user',
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['modalReducer'],
};

export const configureStore = () => {
  const pReducer: any = persistReducer(persistConfig, reducers);
  const middleware = applyMiddleware(thunk);
  const enhancer = composeWithDevTools(middleware);

  return createStore(pReducer, enhancer);
};

export const configurePersistor = (store: any) => persistStore(store);
