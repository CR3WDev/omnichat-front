import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: boolean = window.innerWidth <= 992

const isMobileSlice = createSlice({
  name: 'isMobileSlice',
  initialState,
  reducers: {
    setIsMobile: (_, { payload }: PayloadAction<boolean>) => {
      return payload
    },
  },
})

export default isMobileSlice.reducer
export const { setIsMobile } = isMobileSlice.actions
export const selectorIsMobile = (state: any) => {
  return state.isMobileSlice as boolean
}
