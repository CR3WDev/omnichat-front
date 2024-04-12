import { configureStore } from '@reduxjs/toolkit'
import isMobileSlice from './Reducers/isMobileReducer'
import modeSlice from './Reducers/modeReducer'
import themeSlice from './Reducers/themeReducer'
export const store = configureStore({
  reducer: {
    isMobileSlice,
    modeSlice,
    themeSlice,
  },
})
