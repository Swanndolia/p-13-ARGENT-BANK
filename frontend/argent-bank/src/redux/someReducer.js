import { createSlice } from '@reduxjs/toolkit'

export const someReducer = createSlice({
  name: 'some',
  initialState: {
    value: 0
  },
  reducers: {
    basic: state => {
      state.value += 1
    },
    withPayload: (state, action) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = someReducer.actions

export default someReducer.reducer