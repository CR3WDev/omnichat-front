import { configureStore } from '@reduxjs/toolkit'
import isMobileSlice from './Reducers/isMobileReducer'
import modeSlice from './Reducers/modeReducer'

export const store = configureStore({
  reducer: {
    isMobileSlice,
    modeSlice,
  },
})
