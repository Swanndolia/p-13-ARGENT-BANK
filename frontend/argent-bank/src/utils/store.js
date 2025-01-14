import { configureStore } from '@reduxjs/toolkit'

import userSlice from '../redux/userSlice'

export default configureStore({
  reducer: {
    user: userSlice
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
})