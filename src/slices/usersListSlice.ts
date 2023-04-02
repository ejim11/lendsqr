import { createSlice } from "@reduxjs/toolkit";
import { User } from "../components/utils/types";
import formatDate from "../components/utils/formatDate";

const storedUserList: any = localStorage.getItem("user-list");

const storedTableList: any = localStorage.getItem("tableList");

const usersListSlice = createSlice({
  name: "usersList",
  initialState: {
    displayFilterForm: false,
    list: JSON.parse(storedUserList) || [],
    tableList: JSON.parse(storedTableList) || [],
  },
  reducers: {
    setUsersList(state, action: { payload: User[] }) {
      state.list = action.payload;
      localStorage.setItem("users-list", JSON.stringify(action.payload));
    },
    setTableList(state: any, action: { payload: User[] }) {
      const modifiedUsersList = action.payload.map((user) => {
        return {
          id: user.id,
          orgName: user.orgName,
          userName: user.userName,
          email: user.email,
          phoneNumber: user.phoneNumber.slice().split("x")[0],
          date: formatDate(user.createdAt),
          status: "inactive",
        };
      });

      state.tableList = modifiedUsersList;
      localStorage.setItem("tableList", JSON.stringify(modifiedUsersList));
    },
    updateUserStatus(
      state,
      action: { payload: { status: string; id: string } }
    ) {
      const { status, id } = action.payload;
      const userIndex = state.tableList.findIndex(
        (user: any) => user.id === id
      );

      state.tableList[userIndex].status = status;

      localStorage.setItem("tableList", JSON.stringify(state.tableList));
    },
    setDisplayFilterForm(state, action: { payload: boolean }) {
      state.displayFilterForm = action.payload;
    },
  },
});

export const usersListAction = usersListSlice.actions;

export default usersListSlice.reducer;
