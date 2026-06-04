import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },

    updateUser: (state, action) => {
      const { index, user } = action.payload;
      state[index] = user;
    },

    deleteUser: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const {
  addUser,
  updateUser,
  deleteUser,
} = userSlice.actions;

export default userSlice.reducer;