import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { imode } from 'types/mode'

const initialState: imode = 'search'

const modeSlice = createSlice({
  name: 'modeSlice',
  initialState,
  reducers: {
    setMode: (_, { payload }: PayloadAction<any | imode>) => {
      return payload
    },
  },
})

export default modeSlice.reducer
export const { setMode } = modeSlice.actions
export const selectorMode = (state: any) => {
  return state.modeSlice as imode
}
