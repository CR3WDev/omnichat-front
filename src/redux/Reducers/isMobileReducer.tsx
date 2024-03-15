import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: boolean = window.innerWidth <= 992

const isMobileReducer = createSlice({
  name: 'isMobileReducer',
  initialState,
  reducers: {
    setIsMobile: (_, { payload }: PayloadAction<boolean>) => {
      return payload
    },
  },
})

export default isMobileReducer.reducer
export const { setIsMobile } = isMobileReducer.actions
export const useIsMobile = (state: any) => {
  return state.isMobileReducer as boolean
}
