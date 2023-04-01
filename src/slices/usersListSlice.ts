import { createSlice } from "@reduxjs/toolkit";

const storedUserList: any = localStorage.getItem("user-list");

const usersListSlice = createSlice({
  name: "usersList",
  initialState: {
    list: JSON.parse(storedUserList) || [],
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
