import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: localStorage.getItem('username') ?? null,
  accessToken: localStorage.getItem('accessToken') ?? null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.username = payload.username
      state.accessToken = payload.accessToken
    },
  },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
