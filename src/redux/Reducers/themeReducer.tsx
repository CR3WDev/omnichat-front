import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: string | null = localStorage.getItem('theme')
  ? localStorage.getItem('theme')
  : 'light'

const themeSlice = createSlice({
  name: 'themeSlice',
  initialState,
  reducers: {
    setTheme: (_, { payload }: PayloadAction<any | string | null>) => {
      return payload
    },
  },
})

export default themeSlice.reducer
export const { setTheme } = themeSlice.actions
export const selectorTheme = (state: any) => {
  return state.themeSlice as string | null
}
