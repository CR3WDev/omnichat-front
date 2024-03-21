import { configureStore } from '@reduxjs/toolkit'
import isMobileSlice from './Reducers/isMobileReducer'

export const store = configureStore({
  reducer: {
    isMobileSlice,
  },
})
