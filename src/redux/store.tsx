import { configureStore } from '@reduxjs/toolkit'
import isMobileReducer from './Reducers/isMobileReducer'

const store = configureStore({
  reducer: {
    isMobileReducer,
  },
})

export default store
