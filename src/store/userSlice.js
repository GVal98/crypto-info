import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchUser } from '../api/userApi'

const getUser = createAsyncThunk(
  'user/getUser',
  async (options) => {
    const user = await fetchUser(options)
    return user
  },
)

const initialState = {
  username: null,
  accessToken: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut(state) {
      state.username = null
      state.accessToken = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.username = payload.username
        state.accessToken = payload.accessToken
      })
  },
})

const selectUsername = (state) => state.user.username
const selectAccessToken = (state) => state.user.accessToken

export { getUser, selectUsername, selectAccessToken }
export const { logOut } = userSlice.actions
export default userSlice.reducer
