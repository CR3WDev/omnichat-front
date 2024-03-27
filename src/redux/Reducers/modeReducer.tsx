import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { mode } from 'types/mode'

const initialState: mode = 'search'

const modeSlice = createSlice({
  name: 'modeSlice',
  initialState,
  reducers: {
    setMode: (_, { payload }: PayloadAction<any | mode>) => {
      return payload
    },
  },
})

export default modeSlice.reducer
export const { setMode } = modeSlice.actions
export const selectorMode = (state: any) => {
  return state.modeSlice as mode
}
