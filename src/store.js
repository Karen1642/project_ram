import { configureStore, combineSlices  } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice.js'
import charCardReducer from './features/charCard/charCardSlice.js'
import charListReducer from './features/charList/charListSlice.js'
import myCardReducer from './features/myCard/myCardSlice.js'

import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

// const rootReducer = combineSlices({
    // cartSlice: cartReducer,
    // charCardSlice: charCardReducer,
    // charListSlice: charListReducer
// });

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    cartSlice: cartReducer,
    charCardSlice: charCardReducer,
    charListSlice: charListReducer,
    myCardSlice: myCardReducer
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
})

//Then run the saga
sagaMiddleware.run(rootSaga)