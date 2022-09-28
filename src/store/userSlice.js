import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const fetchUser = async (options) => {
  const response = await fetch('http://127.0.0.1:3001/accessToken', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(options),
  })
  const data = await response.json()
  return data
}

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

export { getUser }
export const { logOut } = userSlice.actions
export default userSlice.reducer
