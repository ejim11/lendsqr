import { createSlice } from "@reduxjs/toolkit";

const usersListSlice = createSlice({
  name: "usersList",
  initialState: {
    list: [],
  },
  reducers: {
    setUsersList(state, action: { payload: [] }) {
      state.list = action.payload;
      localStorage.setItem("users-list", JSON.stringify(action.payload));
    },
  },
});

export const usersListAction = usersListSlice.actions;

export default usersListSlice.reducer;
