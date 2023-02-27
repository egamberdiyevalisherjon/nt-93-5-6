import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
  address: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUserData(state, action) {
      state.info = action.payload;
    },
  },
});

export const { loadUserData } = userSlice.actions;

const userReducer = userSlice.reducer;

export default userReducer;
