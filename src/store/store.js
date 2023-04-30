import { configureStore } from '@reduxjs/toolkit'
import { globalSlice } from './globalSlice'
import { homeSlice } from './homeSlice'


export const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
    global: globalSlice.reducer,
  },
})