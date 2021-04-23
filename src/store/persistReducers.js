/* eslint-disable import/no-anonymous-default-export */
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'gd-ter-qui',
      storage,
      whitelist: ['cart', 'user'],
    },
    reducers
  );

  return persistedReducer;
};