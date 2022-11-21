import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  name: string ;
  email: string ;
}
const initialState: UserState = {
  name: '',
  email: '',
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
    removeUser(state) {
      state.email = '';
      state.name = '';
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
