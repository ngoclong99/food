import { ORANGE_SETTING } from '@/utils/constant'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: ORANGE_SETTING,
}

export const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload
    },
  },
})

export const { setTheme } = settingSlice.actions
export const getTheme = (state) => state.setting.theme

export default settingSlice.reducer
