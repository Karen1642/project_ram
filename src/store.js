import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'

import createSagaMiddleware from 'redux-saga'
import watchFetchCharacters from './sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
})

//Then run the saga
sagaMiddleware.run(watchFetchCharacters)