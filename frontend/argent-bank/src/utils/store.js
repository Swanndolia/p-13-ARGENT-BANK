import { configureStore } from '@reduxjs/toolkit'

import someReducer from '../redux/someReducer'

export default configureStore({
  reducer: {
    something: someReducer
  }
})