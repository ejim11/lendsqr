import { createSlice } from "@reduxjs/toolkit";
import { User } from "../components/utils/types";
import formatDate from "../components/utils/formatDate";

const storedUserList: any = localStorage.getItem("users-list");

const storedTableList: any = localStorage.getItem("tableList");

const usersListSlice = createSlice({
  name: "usersList",
  initialState: {
    displayFilterForm: false,
    list: JSON.parse(storedUserList) || [],
    tableList: JSON.parse(storedTableList) || [],
  },
  reducers: {
    upDateTableList(state, action) {
      state.tableList = action.payload;
      localStorage.setItem("tableList", JSON.stringify(state.tableList));
    },
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
    filterTableListDataByOrganization(state, action: { payload: string }) {
      state.tableList = state.tableList.filter(
        (user: any) =>
          user.orgName.toLowerCase() === action.payload.toLowerCase()
      );
    },
    filterTableListDataByUsername(state, action: { payload: string }) {
      state.tableList = state.tableList.filter(
        (user: any) =>
          user.userName.toLowerCase() === action.payload.toLowerCase()
      );
    },
    filterTableListDataByEmail(state, action: { payload: string }) {
      state.tableList = state.tableList.filter(
        (user: any) => user.email.toLowerCase() === action.payload.toLowerCase()
      );
    },
    filterTableListDataByPhone(state, action: { payload: string }) {
      state.tableList = state.tableList.filter(
        (user: any) => user.phone.toLowerCase() === action.payload.toLowerCase()
      );
    },
    filterTableListDataByDate(state, action: { payload: string }) {
      state.tableList = state.tableList.filter(
        (user: any) => user.date.toLowerCase() === action.payload.toLowerCase()
      );
    },
    filterTableListDataByStatus(state, action: { payload: string }) {
      state.tableList = state.tableList.filter(
        (user: any) =>
          user.status.toLowerCase() === action.payload.toLowerCase()
      );
    },
  },
});

export const usersListAction = usersListSlice.actions;

export default usersListSlice.reducer;
